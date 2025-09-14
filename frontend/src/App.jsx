// src/App.js
import React, { useState, useMemo, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Filters from './components/Filters';
import DishList from './components/DishList';
import SelectedSummary from './components/Summary'; // your file
import IngredientModal from './components/IngredientModal';
import { dishes as allDishes } from './data/mockDishes.js';

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [modalDish, setModalDish] = useState(null);

  // selectedDishes stores array of objects: { id, qty }
  const [selectedDishes, setSelectedDishes] = useState(() => {
    try {
      const raw = localStorage.getItem('selectedDishes');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // Persist selection so a refresh doesn't wipe it
  useEffect(() => {
    try {
      localStorage.setItem('selectedDishes', JSON.stringify(selectedDishes));
    } catch (e) {
      // ignore storage errors
    }
  }, [selectedDishes]);

  // Filtering logic (unchanged functionally)
  const filteredDishes = useMemo(() => {
    return allDishes.filter((dish) => {
      const matchesCategory =
        activeCategory === 'ALL' || dish.mealType === activeCategory;

      const matchesSearch =
        dish.name.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesVeg = vegOnly ? dish.type === 'VEG' : true;

      return matchesCategory && matchesSearch && matchesVeg;
    });
  }, [activeCategory, searchTerm, vegOnly]);

  // Add a dish (if present increment qty, else add new). then navigate to /summary
  const handleAddDish = (id, navigate) => {
    setSelectedDishes((prev) => {
      const existing = prev.find((d) => d.id === id);
      if (existing) {
        return prev.map((d) => (d.id === id ? { ...d, qty: d.qty + 1 } : d));
      }
      return [...prev, { id, qty: 1 }];
    });

    // if a navigate function was provided, send user to summary
    if (typeof navigate === 'function') {
      navigate('/summary');
    }
  };

  // Remove an item completely from selection
  const handleRemoveDish = (id) => {
    setSelectedDishes((prev) => prev.filter((d) => d.id !== id));
  };

  // Change quantity by delta (+1 or -1). If qty becomes <= 0 -> remove.
  const handleQtyChange = (id, delta) => {
    setSelectedDishes((prev) => {
      return prev.reduce((acc, d) => {
        if (d.id !== id) {
          acc.push(d);
          return acc;
        }
        const newQty = d.qty + delta;
        if (newQty <= 0) {
          // removing by decreasing below 1
          return acc;
        }
        acc.push({ ...d, qty: newQty });
        return acc;
      }, []);
    });
  };

  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>🎉 Party Menu Selection App 🎶</h1>
          <p>Choose your favorite dishes for the perfect party vibe 🍸</p>
        </header>

        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Filters
                  activeCategory={activeCategory}
                  onCategoryChange={setActiveCategory}
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  vegOnly={vegOnly}
                  onVegOnlyChange={setVegOnly}
                />

                <DishList
                  dishes={filteredDishes}
                  onAddDish={handleAddDish}
                  onRemoveDish={handleRemoveDish}
                  selectedDishes={selectedDishes} // now array of {id, qty}
                  onViewIngredients={setModalDish}
                />

                <IngredientModal
                  dish={modalDish}
                  onClose={() => setModalDish(null)}
                />
              </>
            }
          />

          {/* Summary page */}
          <Route
            path="/summary"
            element={
              <SelectedSummary
                selectedDishes={selectedDishes}
                dishes={allDishes}
                onRemoveDish={handleRemoveDish}
                onQtyChange={handleQtyChange}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
