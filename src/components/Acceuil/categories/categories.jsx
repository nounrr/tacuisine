import React from 'react'
import{useRef,useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import "./categorie.css";


export default function Categorie({ categories }) {
  const [width,setWidth]=useState(0)
  const carouselRef=useRef();
  useEffect(()=>{
    setWidth(carouselRef.current.scrollWidth-carouselRef.current.offseWidth)
  },[])
  return(
    <>
<motion.div ref={carouselRef} className='carousel'>
   <motion.div  drag='x' 
   dragConstraints={{right:0,left:-width}} 
   className='innercarousel '>
      {categories.map((categorie, index) => (
        <motion.div key={index} className='item'>
          <div className='category'>
            <div className="emoji">{categorie.emoji}</div>
            <div>{categorie.title}</div>
          </div>
        </motion.div>
      ))}
    </motion.div >
    </motion.div >
</>
  );
}



