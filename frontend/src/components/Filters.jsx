import React from 'react';
import './filter.css';

const Filters = ({ 
  activeCategory, 
  onCategoryChange, 
  searchTerm, 
  onSearchChange, 
  vegOnly, 
  onVegOnlyChange 
}) => {
  const categories = ['ALL', 'STARTER', 'MAIN COURSE', 'DESSERT', 'SIDES'];
  
  return (
    <div className="filters-container">
      <div className="search-section">
        <input
          type="text"
          placeholder="Search dishes..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        <label className="veg-filter">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={(e) => onVegOnlyChange(e.target.checked)}
          />
          <span>Veg Only</span>
        </label>
      </div>
      
      <div className="category-tabs">
        {categories.map(category => (
          <button
            key={category}
            className={`category-tab ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Filters;