import React from "react";
import MenuSection from "../Components/MenuSection/menuSection";

function Menu() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2
        style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2rem" }}
      >
        Our Delicious Menu
      </h2>
      <MenuSection />
    </div>
  );
}

export default Menu;
