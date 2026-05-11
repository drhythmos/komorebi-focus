import React from 'react';
import FoodItem from './FoodItem';
import { foodData } from '../data/foodData';

const FoodGallery = () => {
  return (
    <div className="food-gallery">
      {foodData.map((food, index) => (
        <FoodItem key={food.id} food={food} index={index} />
      ))}
    </div>
  );
};

export default FoodGallery;
