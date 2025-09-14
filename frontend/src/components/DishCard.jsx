// src/components/DishCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DishCard = ({ 
  dish, 
  onAddDish, 
  onRemoveDish, 
  isSelected, 
  onViewIngredients 
}) => {
  const navigate = useNavigate();

  return (
    <div className="dish-card">
      <div className="dish-image">
        <img 
          src={dish.image || 'https://placehold.co/300x200/E0E0E0/757575?text=No+Image'} 
          alt={dish.name}
        />
        <span className={`dish-type-badge ${dish.type.toLowerCase().replace('-', '')}`}>
          {dish.type}
        </span>
      </div>
      
      <div className="dish-content">
        <h3 className="dish-name">{dish.name}</h3>
        <p className="dish-description">{dish.description}</p>
        <p className="dish-price">₹{dish.price}</p>
        <p className="dish-category">{dish.category.name} • {dish.mealType}</p>
        
        <div className="dish-actions">
          <button
            className="ingredients-btn"
            onClick={() => onViewIngredients(dish)}
          >
            View Ingredients
          </button>
          
          {isSelected ? (
            <button
              className="remove-btn"
              onClick={() => onRemoveDish(dish.id)}
            >
              Remove
            </button>
          ) : (
            <button
              className="add-btn"
              onClick={() => onAddDish(dish.id, navigate)}
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DishCard;
