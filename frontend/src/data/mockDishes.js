// Mock data for the Party Menu Selection App
import kajuPaneerImg from '../assets/kaju_panner.jpg';
import butterChickenImg from '../assets/Best-butter-chicken-recipe-instagram.jpg';
import dalimg from '../assets/Dal-Makhani.jpg';
import springimg from '../assets/spring-roll-veg.jpg';
import chickenwingimg from '../assets/garlicgingerwings1.jpg';
import hakkaNoodlesimg from '../assets/Hakka-Noodles-1.jpg';
import alooparathaimg from '../assets/aloo_parota.jpg';
import pooriimg from '../assets/poori.jpg';
import nanimg from '../assets/Butter-Naan-2.jpg';
import chiliimg from '../assets/Chilli Chiken.jpg';


import gulabimg from '../assets/gulab.jpg';
import looduimg from '../assets/loodu.jpg';
import jelebiimg from '../assets/jalebi.jpg';
import chocoimg from '../assets/chocolate.jpg';
import tandooriRotiimg from '../assets/tandoori_roti.jpg';
import porotaimg from '../assets/parota.jpg';
export const dishes = [
  // Category 1: North Indian
  {
    "id": 1,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Paneer cubes in spicy onion gravy with onions and capsicum cubes.",
    "image": kajuPaneerImg,
    "price": 250,
    "category": {
      "id": 1,
      "name": "North Indian"
      
    },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "name": "Kadhai Paneer",
    "ingredients": [
      { "name": "Paneer", "quantity": "200g" },
      { "name": "Onion", "quantity": "2 large" },
      { "name": "Capsicum", "quantity": "1 large" },
      { "name": "Tomato Puree", "quantity": "1 cup" }
    ]
  },
  {
    "id": 2,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Tender chicken pieces in rich tomato and cream-based gravy.",
    "image": butterChickenImg,
    "price": 350,
    "category": { "id": 1, "name": "North Indian", 
        
         "isRecommendedForMealSuggestion": true },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "name": "Butter Chicken",
    "ingredients": [
      { "name": "Chicken", "quantity": "500g" },
      { "name": "Butter", "quantity": "50g" },
      { "name": "Tomatoes", "quantity": "3 large" },
      { "name": "Cream", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 3,
    "categoryId": 1,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Soft and fluffy Indian bread perfect with curries.",
    "image": nanimg,
    "price": 50,
    "category": { "id": 1, "name": "North Indian", 
        
         "isRecommendedForMealSuggestion": true },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "name": "Butter Naan",
    "ingredients": [
      { "name": "All Purpose Flour", "quantity": "2 cups" },
      { "name": "Yogurt", "quantity": "1/4 cup" },
      { "name": "Butter", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 4,
    "categoryId": 1,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Spiced black lentils slow cooked with butter and cream.",
    "image": dalimg,
    "price": 150,
    "category": { "id": 1, "name": "North Indian", 
        
         "isRecommendedForMealSuggestion": true },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "name": "Dal Makhani",
    "ingredients": [
      { "name": "Black Lentils", "quantity": "1 cup" },
      { "name": "Butter", "quantity": "50g" },
      { "name": "Cream", "quantity": "1/4 cup" }
    ]
  },

  // Category 2: Chinese
  {
    "id": 5,
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "VEG",
    "description": "Crispy vegetable spring rolls with sweet and sour sauce.",
    "image": springimg,
    "price": 200,
    "category": { "id": 2, "name": "Chinese", 
         "isRecommendedForMealSuggestion": true },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "name": "Veg Spring Rolls",
    "ingredients": [
      { "name": "Cabbage", "quantity": "1 cup" },
      { "name": "Carrots", "quantity": "1/2 cup" },
      { "name": "Spring Roll Sheets", "quantity": "10 pieces" }
    ]
  },
  {
    "id": 6,
    "categoryId": 2,
    "mealType": "STARTER",
    "type": "NON-VEG",
    "description": "Crispy chicken wings tossed in spicy sauce.",
    "image": chickenwingimg,
    "price": 350,
    "category": { "id": 2, "name": "Chinese", 
        
         "isRecommendedForMealSuggestion": true },
    "dishType": "APPETIZER",
    "forChefit": true,
    "forParty": true,
    "name": "Spicy Chicken Wings",
    "ingredients": [
      { "name": "Chicken Wings", "quantity": "1 kg" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" },
      { "name": "Hot Sauce", "quantity": "1 tbsp" }
    ]
  },
  {
    "id": 7,
    "categoryId": 2,
    "mealType": "MAIN COURSE",
    "type": "VEG",
    "description": "Stir-fried noodles with vegetables and soy sauce.",
    "image": hakkaNoodlesimg,
    "price": 150,
    "category": { "id": 2, "name": "Chinese", 
         "isRecommendedForMealSuggestion": true },
    "dishType": "NOODLES",
    "forChefit": true,
    "forParty": true,
    "name": "Veg Hakka Noodles",
    "ingredients": [
      { "name": "Noodles", "quantity": "200g" },
      { "name": "Carrots", "quantity": "1/2 cup" },
      { "name": "Capsicum", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 8,
    "categoryId": 2,
    "mealType": "MAIN COURSE",
    "type": "NON-VEG",
    "description": "Chicken chunks tossed in a spicy Indo-Chinese sauce.",
    "image": chiliimg,
    "price": 350,
    "category": { "id": 2, "name": "Chinese", 
        "isRecommendedForMealSuggestion": true },
    "dishType": "CURRY",
    "forChefit": true,
    "forParty": true,
    "name": "Chilli Chicken",
    "ingredients": [
      { "name": "Chicken", "quantity": "400g" },
      { "name": "Capsicum", "quantity": "1 cup" },
      { "name": "Soy Sauce", "quantity": "2 tbsp" }
    ]
  },

  // Category 3: Indian Sweets
  {
    "id": 9,
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Traditional Indian sweet made with milk solids and sugar syrup.",
    "image": gulabimg,
    "price": 20,
    "category": { "id": 3, "name": "Indian Sweets", 
        
         "isRecommendedForMealSuggestion": true },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "name": "Gulab Jamun",
    "ingredients": [
      { "name": "Milk Powder", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Cardamom", "quantity": "4 pcs" }
    ]
  },
  {
    "id": 10,
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Sweet balls made of chickpea flour and ghee.",
    "image": looduimg,
    "price": 25,
    "category": { "id": 3, "name": "Indian Sweets",
         "isRecommendedForMealSuggestion": true },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "name": "Besan Ladoo",
    "ingredients": [
      { "name": "Gram Flour", "quantity": "1 cup" },
      { "name": "Sugar", "quantity": "1 cup" },
      { "name": "Ghee", "quantity": "1/2 cup" }
    ]
  },
  {
    "id": 11,
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Deep-fried spirals soaked in sugar syrup.",
    "image": jelebiimg ,
    "price": 50,
    "category": { "id": 3, "name": "Indian Sweets", 
         "isRecommendedForMealSuggestion": true },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "name": "Jalebi",
    "ingredients": [
      { "name": "Maida", "quantity": "2 cups" },
      { "name": "Sugar", "quantity": "2 cups" },
      { "name": "Saffron", "quantity": "a few strands" }
    ]
  },
  {
    "id": 12,
    "categoryId": 3,
    "mealType": "DESSERT",
    "type": "VEG",
    "description": "Popular sweet fudge made with condensed milk and cocoa.",
    "image": chocoimg,
    "price": 70,
    "category": { "id": 3, "name": "Indian Sweets", 
        "isRecommendedForMealSuggestion": true },
    "dishType": "SWEET",
    "forChefit": true,
    "forParty": true,
    "name": "Chocolate Barfi",
    "ingredients": [
      { "name": "Milk Powder", "quantity": "1 cup" },
      { "name": "Cocoa Powder", "quantity": "2 tbsp" },
      { "name": "Sugar", "quantity": "1 cup" }
    ]
  },

  // Category 4: Breads
  {
    "id": 13,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Crispy tandoor-baked bread made with wheat flour.",
    "image": tandooriRotiimg,
    "price": 40,
    "category": { "id": 4, "name": "Breads", 
         "isRecommendedForMealSuggestion": true },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "name": "Tandoori Roti",
    "ingredients": [
      { "name": "Wheat Flour", "quantity": "2 cups" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Water", "quantity": "as required" }
    ]
  },
  {
    "id": 14,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Layered and crispy bread cooked with ghee.",
    "image": porotaimg,
    "price": 100,
    "category": { "id": 4, "name": "Breads", 
        "isRecommendedForMealSuggestion": true },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "name": "Lachha Paratha",
    "ingredients": [
      { "name": "Wheat Flour", "quantity": "2 cups" },
      { "name": "Ghee", "quantity": "2 tbsp" }
    ]
  },
  {
    "id": 15,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Stuffed bread with mashed spiced potatoes.",
    "image": alooparathaimg,
    "price": 100,
    "category": { "id": 4, "name": "Breads", 
       "isRecommendedForMealSuggestion": true },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "name": "Aloo Paratha",
    "ingredients": [
      { "name": "Wheat Flour", "quantity": "2 cups" },
      { "name": "Potato", "quantity": "2 medium" },
      { "name": "Green Chilli", "quantity": "2" }
    ]
  },
  {
    "id": 16,
    "categoryId": 4,
    "mealType": "SIDES",
    "type": "VEG",
    "description": "Flaky deep-fried bread often eaten with curries.",
    "image": pooriimg,
    "price": 100,
    "category": { "id": 4, "name": "Breads", 
        "isRecommendedForMealSuggestion": true },
    "dishType": "BREAD",
    "forChefit": true,
    "forParty": true,
    "name": "Poori",
    "ingredients": [
      { "name": "Wheat Flour", "quantity": "2 cups" },
      { "name": "Salt", "quantity": "1 tsp" },
      { "name": "Oil", "quantity": "for frying" }
    ]
  }
];
