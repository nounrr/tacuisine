
import React,{ useState } from "react";
import Recips from "./Cards/card";
import Categorie from "./categories/categories";
import Header from "./Header/Header";
const Categories = [
    { title: "Breakfast", emoji: "🥞", active: true },
    { title: "Lunch", emoji: "🍔", active: false },
    { title: "Dinner", emoji: "🍛", active: false },
    { title: "Drinks", emoji: "🍹", active: false },
    { title: "Desserts", emoji: "🍰", active: false },
];
const recipes = [
    {
      title: "Easy Homemade Beef Burger",
      type: "Fast Food",
      owner: "James Spader",
      imageUrl: "https://via.placeholder.com/100", // Replace with actual URLs if needed
      authorImage: "https://via.placeholder.com/30", // Replace with actual URLs if needed
    },
    {
      title: "Vegan Tacos",
      type: "Mexican",
      owner: "Emily Clark",
      imageUrl: "https://via.placeholder.com/100",
      authorImage: "https://via.placeholder.com/30",
    },
    {
      title: "Spaghetti Bolognese",
      type: "Italian",
      owner: "Michael Scott",
      imageUrl: "https://via.placeholder.com/100",
      authorImage: "https://via.placeholder.com/30",
    },
    {
      title: "Chicken Curry",
      type: "Indian",
      owner: "Raj Patel",
      imageUrl: "https://via.placeholder.com/100",
      authorImage: "https://via.placeholder.com/30",
    },
    {
      title: "Sushi Platter",
      type: "Japanese",
      owner: "Hiro Tanaka",
      imageUrl: "https://via.placeholder.com/100",
      authorImage: "https://via.placeholder.com/30",
    },
  ];
function Acceuil(){
    
   const [recipe, setRecipe] = useState(recipes); 
   const [categories, setCategories] = useState(Categories); 
    return(
        <>
          <Header/>
          < Categorie categories={categories}/>
          <Recips recipes={recipe} />
          
        </>
    )
}
export default Acceuil