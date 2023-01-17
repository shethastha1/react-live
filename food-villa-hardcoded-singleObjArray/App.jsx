import React from "react";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
/* 
    Header
      Logo
      NavItems(Right side)
      Cart
    Body
      SearchBar
      RestaurantList
        RestaurantCard
          Image
          Rating
          Cusines
    Footer
      Links
      copyrights
     */

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;
