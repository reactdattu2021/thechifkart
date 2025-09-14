import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Summery.css';

const SelectedSummary = ({ selectedDishes, dishes, onRemoveDish, onQtyChange }) => {
  const selectedDishesData = selectedDishes.map((sel) => {
    const dish = dishes.find((d) => d.id === sel.id);
    return { ...dish, qty: sel.qty };
  });

  const totalAmount = selectedDishesData.reduce(
    (sum, dish) => sum + (dish.price || 0) * dish.qty,
    0
  );

   const navigate = useNavigate();

  // ✅ Redirect if no items
  useEffect(() => {
    if (selectedDishes.length === 0) {
      navigate('/'); // go back to main page
    }
  }, [selectedDishes, navigate]);

  return (
    <div className="selected-summary">
      <h2>Selected Items ({selectedDishesData.length})</h2>
      <div className="selected-items">
        {selectedDishesData.map((dish) => (
          <div key={dish.id} className="selected-item">
            <img 
              src={dish.image || 'https://placehold.co/100x80'} 
              alt={dish.name}
            />
            <div className="selected-item-info">
              <h4>{dish.name}</h4>
              <p>{dish.category.name}</p>
              <p>₹{dish.price} x {dish.qty} = ₹{dish.price * dish.qty}</p>
              
              <div className="qty-controls">
                <button onClick={() => onQtyChange(dish.id, -1)}>-</button>
                <span>{dish.qty}</span>
                <button onClick={() => onQtyChange(dish.id, 1)}>+</button>
              </div>
            </div>
            <button 
              className="remove-from-summary"
              onClick={() => onRemoveDish(dish.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
      
      <div className="summary-total">
        <h3>Total: ₹{totalAmount}</h3>
      </div>
      {/* ✅ Back to Main Page Button */}
      <div className="back-btn-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ⬅ Back to Menu
        </button>
      </div>
    </div>
  );
};

export default SelectedSummary;
