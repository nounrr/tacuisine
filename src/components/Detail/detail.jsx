import React from 'react';
import im5 from "./exemp/im5.jpg";
import Swiper from './swiperImages';
import Ingrediants from './ingrediants';
import Description from './description';
import Infos from './infoRecette';
import Steps from './Steps';
import im1 from "./exemp/im1.jpg";
import im2 from "./exemp/im2.jpg";
import im3 from "./exemp/im3.jpg";
import im4 from "./exemp/im4.jpg";

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

     
      const steps = [
        { id: 1, label: "Crack 4 Eggs into a mixing bowl", image: im1 },
        { id: 2, label: "Measure 2 Cups of Milk", image: im1 },
        { id: 3, label: "Add 1 Teaspoon of Sugar to the mixture", image: im2},
        { id: 4, label: "Melt 200g of Butter and add to the bowl", image: im3},
        { id: 5, label: "Measure and add 3 Cups of Flour to the bowl", image: im4 },
        { id: 6, label: "Add 1 Pinch of Salt to the mixture", image: im1 },
      ];
      
      
      
    return(
        <>
        <Infos title='Beef Burger' type='Fast Food' duration='60min' owner='Zainab' authorImage={im5} />
        <Swiper />
        <Description/>
        <Ingrediants ingreds={ingreds}/>
        <Steps steps={steps}/>
        </>
    )
 }