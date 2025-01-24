<<<<<<< HEAD
import React, { useState } from "react";
import Categorie from "../categories/categories";
import Header from "../Header/Header";
import CardsList from "../Cards/CardsList";
=======

import React,{ useState } from "react";
import Recips from "./Cards/card";
import Categorie from "./categories/categories";
import Header from "./Header/Header";
import PhoneNav from "../NavBar/PhoneNav";
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
const Categories = [
  { title: "Breakfast", emoji: "🥞", active: true },
  { title: "Lunch", emoji: "🍔", active: false },
  { title: "Dinner", emoji: "🍛", active: false },
  { title: "Drinks", emoji: "🍹", active: false },
  { title: "Desserts", emoji: "🍰", active: false },
];

const recipes = [
<<<<<<< HEAD
  {
    title: "Beef Burger",
    type: "Fast Food",
    owner: "James Spader",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:1,
  },
  {
    title: "Vegan Tacos",
    type: "Mexican",
    owner: "Emily Clark",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:2,
  },
  {
    title: "Spaghetti Bolognese",
    type: "Italian",
    owner: "Michael Scott",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:3,
  },
  {
    title: "Chicken Curry",
    type: "Indian",
    owner: "Raj Patel",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:4,
  },
  {
    title: "Sushi Platter",
    type: "Japanese",
    owner: "Hiro Tanaka",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:5,
  },
  {
    title: "Beef Burger",
    type: "Fast Food",
    owner: "James Spader",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:1,
  },
  {
    title: "Vegan Tacos",
    type: "Mexican",
    owner: "Emily Clark",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:2,
  },
  {
    title: "Spaghetti Bolognese",
    type: "Italian",
    owner: "Michael Scott",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:3,
  },
  {
    title: "Chicken Curry",
    type: "Indian",
    owner: "Raj Patel",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:4,
  },
  {
    title: "Sushi Platter",
    type: "Japanese",
    owner: "Hiro Tanaka",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:5,
  },
  {
    title: "Beef Burger",
    type: "Fast Food",
    owner: "James Spader",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:1,
  },
  {
    title: "Vegan Tacos",
    type: "Mexican",
    owner: "Emily Clark",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:2,
  },
  {
    title: "Spaghetti Bolognese",
    type: "Italian",
    owner: "Michael Scott",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:3,
  },
  {
    title: "Chicken Curry",
    type: "Indian",
    owner: "Raj Patel",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:4,
  },
  {
    title: "Sushi Platter",
    type: "Japanese",
    owner: "Hiro Tanaka",
    imageUrl: "https://via.placeholder.com/100",
    authorImage: "https://via.placeholder.com/30",
    id:5,
  },
];



function Acceuil() {
  const [recipe, setRecipe] = useState(recipes);
  const [categories, setCategories] = useState(Categories);

  return (
    <div className="content">
      <Header />
      {/* <VideoList/> */}
      <h1 className="title green">Catégories</h1>
      <Categorie categories={categories} />
      <h1 className="title green">Recettes</h1>
      <CardsList recipes={recipe} />
    </div>
  );
=======
    {
      title: " Beef Burger",
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
           <PhoneNav/>
        </>
    )
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
}

export default Acceuil;
