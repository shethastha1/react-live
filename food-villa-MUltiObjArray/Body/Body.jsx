import React, { useEffect } from "react";
import { data } from "./data";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => (
  <div className="card">
    <img
      src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      alt="Jagdish"
    />
    <h2>{name}</h2>
    <h3>{cuisines?.join(", ")}</h3>

    <h4>{avgRating} stars</h4>
  </div>
);
const Body = () => {
  console.log("Data", data);
  //   useEffect(() => {
  //     (async () => {
  //       const data = await fetch(
  //         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
  //       );
  //       console.log(data, "DATA");
  //     })();
  //   });
  return (
    <div className="restaurant-list">
      {data.map((restaurant) => (
        <RestaurantCard {...restaurant.data} />
      ))}
    </div>
  );
};

export default Body;
