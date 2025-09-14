import React from 'react';

const IngredientModal = ({ dish, onClose }) => {
  if (!dish) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{dish.name}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <img 
            src={dish.image || 'https://placehold.co/300x200/E0E0E0/757575?text=No+Image'} 
            alt={dish.name}
            className="modal-image"
          />
          
          <p className="modal-description">{dish.description}</p>
          
          <div className="ingredients-section">
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
              {dish.ingredients?.map((ingredient, index) => (
                <li key={index}>
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="dish-details">
            <p><strong>Category:</strong> {dish.category.name}</p>
            <p><strong>Meal Type:</strong> {dish.mealType}</p>
            <p><strong>Type:</strong> {dish.type}</p>
            <p><strong>Dish Type:</strong> {dish.dishType}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientModal;