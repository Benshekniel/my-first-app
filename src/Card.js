// CardList.jsx

import React from 'react';
import Card from './Card'; // Assuming you have a Card component defined

const CardList = ({ cards }) => {
  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

export default CardList;
