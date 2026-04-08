import React from 'react';

function Card({items}) {
  return (
    <div className='card'>
      {items.map((item, index) => (
        <div key={index}>
            <h3>{item.name}</h3>
            <p>Цена: {item.price} руб.</p>
        </div>
      ))}
    </div>
  );
};

export default Card;