import React from "react";
import Hero from "../Components/Hero/Hero";
import FoodList from "../Components/FoodCard/FoodList";

function Home() {
  return (
    <div>
      <Hero />
      <FoodList />
      {/* Future: Add Testimonials, Partners, Offers, etc. */}
    </div>
  );
}

export default Home;
