import React from 'react';
import { useParams } from 'react-router-dom';

function RestaurantMenu() {
  const { id } = useParams(); // get restaurant id from URL

  return (
    <div>
      <h1>Restaurant Menu 🍽️</h1>
      <p>Showing menu for restaurant ID: {id}</p>
    </div>
  );
}

export default RestaurantMenu;