import React, { useState } from "react";
import Categorie from "../categories/categories";
import Header from "../Header/Header";
import CardsList from "../Cards/CardsList";
import { useSelector } from "react-redux";

const Categories = [
  { title: "Breakfast", emoji: "🥞", active: true },
  { title: "Lunch", emoji: "🍔", active: false },
  { title: "Dinner", emoji: "🍛", active: false },
  { title: "Drinks", emoji: "🍹", active: false },
  { title: "Desserts", emoji: "🍰", active: false },
];

function Acceuil() {
  const recettes = useSelector((state) => state.recettes.recettes);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState(Categories);

  const handleCategorySelect = (category) => {
    if (selectedCategory === category.title) {
      setSelectedCategory(null);
      const updatedCategories = categories.map((cat) => ({
        ...cat,
        active: false,
      }));
      setCategories(updatedCategories);
    } else {
      setSelectedCategory(category.title);
      const updatedCategories = categories.map((cat) => ({
        ...cat,
        active: cat.title === category.title,
      }));
      setCategories(updatedCategories);
    }
  };

  const filteredRecettes = selectedCategory
    ? recettes.filter((r) => r.nom_categorie === selectedCategory)
    : recettes;

  return (
    <div className="content">
      <Header />
      <h1 className="title green">Catégories</h1>
      <Categorie categories={categories} onSelect={handleCategorySelect} />
      <h1 className="title green">Recettes</h1>
      <CardsList recipes={filteredRecettes} />
    </div>
  );
}

export default Acceuil;
