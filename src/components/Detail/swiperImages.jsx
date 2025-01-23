import React from 'react'
import{useRef,useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import images from './images'
import '../../assest/css/detail.css'; 
 export default function Swiper(){
    const [width,setWidth]=useState(0)
    const carouselRef=useRef();
    useEffect(()=>{
      setWidth(carouselRef.current.scrollWidth-carouselRef.current.offseWidth)
    },[])
    return(
        <>
           <h2>Gallerie</h2>
           <motion.div ref={carouselRef} className='carousel'>
              <motion.div  drag='x' 
              dragConstraints={{right:0,left:-width}} 
              className='innercarousel '>
                    {images.map((image)=>(
                        <motion.div className='item' key={image}>
                            <img src={image}/>
                        </motion.div>
                    ) 
                    )} 
              </motion.div>

           </motion.div>
           <hr></hr>
        </>
    )
 }