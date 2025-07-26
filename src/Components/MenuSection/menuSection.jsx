import React from "react";
import FoodCard from "../FoodCard/FoodCard";
import styles from "./menuSection.module.css";
import sampleImage from "../../assets/images/hero.webp";
import { useCart } from "../../Context/CartContext";

const foodItems = [
  {
    id: 1,
    name: "Kitfo Special",
    description: "Spiced Ethiopian minced meat served with injera.",
    price: 120,
    image: sampleImage,
  },
  {
    id: 2,
    name: "Tibs",
    description: "Sautéed meat cubes with onions, garlic, and pepper.",
    price: 100,
    image: sampleImage,
  },
  {
    id: 4,
    name: "Shiro",
    description: "Chickpea stew with rich berbere spices.",
    price: 80,
    image: sampleImage,
  },
];

function MenuSection() {
  const { handleAddToCart } = useCart();

  return (
    <div className={styles.menu}>
      {foodItems.map((item) => (
        <FoodCard
          key={item.id}
          image={item.image}
          name={item.name}
          description={item.description}
          price={item.price}
          onAddToCart={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
}

export default MenuSection;
