import React from 'react';

const FoodItem = ({ food, index }) => {
  return (
    <div className="food-item">
      <div className="image-stack">
        <div className="main-image">
          <img src={food.mainImage} alt={food.enName} loading="lazy" />
        </div>
        <div className="sub-image">
          <img src={food.subImage} alt={`${food.enName} detail 1`} loading="lazy" />
        </div>
        <div className="tertiary-image">
          <img src={food.tertiaryImage} alt={`${food.enName} detail 2`} loading="lazy" />
        </div>
      </div>
      
      <div className="content-box">
        <div className="ja-vertical-text">
          {food.jaName}
        </div>
        <h2>{food.enName}</h2>
        <span className="romaji">{food.romaji}</span>
        <p className="en-quote">{food.enQuote}</p>
        <p className="ja-quote">{food.jaQuote}</p>
      </div>
    </div>
  );
};

export default FoodItem;
