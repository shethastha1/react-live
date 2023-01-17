import React, { useEffect } from "react";

const RestaurantCard = () => (
  <div className="card">
    <img
      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/rx40kdwqycwyhnslasie"
      alt="Jagdish"
    />
    <h2>Jagadish</h2>
    <h3>{["Desserts", "South Indian", "Pizzas"].join(", ")}</h3>

    <h4>4.2 stars1</h4>
  </div>
);
const Body = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </div>
  );
};

export default Body;
