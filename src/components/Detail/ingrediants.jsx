import React from 'react'
import '../../assest/css/detail.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons'; 
 export default function Ingrediants({ingreds}){
    return(
        <>
        <h2>Ingrediants</h2>
        {ingreds.map((ingred,index)=>(
            <div className="container" key={index}>
                
                <FontAwesomeIcon icon={faCircle} className='icon'/>
                <h4>{ingred.label}</h4>
            </div>            
        ))}
    
        </>
    )
 }