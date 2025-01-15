import React from 'react';
import im5 from "./exemp/im5.jpg";
import Swiper from './swiperImages';
import Ingrediants from './ingrediants';
import Description from './description';
import Infos from './infoRecette';
 export default function Detail(){
   
      const ingreds = [
        { id: 1, label: "4 Eggs" },
        { id: 2, label: "2 Cups of Milk" },
        { id: 3, label: "1 Teaspoon of Sugar" },
        { id: 4, label: "200g of Butter" },
        { id: 5, label: "3 Cups of Flour" },
        { id: 6, label: "1 Pinch of Salt" },
        { id: 7, label: "1 Tablespoon of Baking Powder" },
        { id: 8, label: "100g of Chocolate Chips" },
        { id: 9, label: "1 Teaspoon of Vanilla Extract" },
        { id: 10, label: "2 Bananas, mashed" },
      ];
      
    return(
        <>
        <Infos title='Beef Burger' type='Fast Food' duration='60min' owner='Zainab' authorImage={im5} />
        <Swiper />
        <Description/>
        <Ingrediants ingreds={ingreds}/>
        </>
    )
 }