import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from '../../../assest/css/AjouterRecettes/AjouterRecettes.module.css'
const marks = [
  {
    value: 5,
    label: '<10',
  },
  {
    value: 30,
    label: '30 ',
  },
  
  {
    value: 55,
    label: '>60',
  },
];

function valuetext(value) {
  return `${value}°C`;
}


const Page2 = () => {
  return (
    <div className='content'>
    <div className={style.slide2}>
      <div>
        <h1 className='title blue'>Nom de recette</h1>
        <input type="text" className={style.addInput} placeholder='Entrer le nom de recette' />
      </div>
      <div>
        <h1 className='title blue'>Description</h1>
        <textarea rows={5}  className={style.textarea} placeholder='Entrer la description'></textarea>
      </div>
      <div>
        <h1 className='title blue'>La durée de coockig <span> (en minutes)</span></h1>
        
      <Slider 
      className="customSlider" 
      sx={{color:"#FFD700",marginTop:"10px"}}
      min={0}
      max={60}
        aria-label="Always visible"
        defaultValue={30}
        getAriaValueText={valuetext}
        step={5}
        marks={marks}
        valueLabelDisplay="auto"
      />
      </div>
    </div>
    </div>
  )
}

export default Page2