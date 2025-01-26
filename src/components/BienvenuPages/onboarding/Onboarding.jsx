import React from 'react'
import BienvenuComp from '../comp/BienvenuComp';
import { motion } from 'framer-motion';
function Onboarding() {
  return (
    <>
     <motion.div
     initial={{ opacity: 0 }} 
     animate={{opacity: 1}} 
     exit={{opacity: 0}} 
     transition={{  duration: 0.3 }}
  >
    <BienvenuComp 
                  bgLink={ process.env.PUBLIC_URL + '/img/bg1.jpg'}
                  title='Bienvenue dans Kozintk !'
                  paragraphe="Explorez un monde de saveurs, partagez vos meilleures recettes et inspirez-vous des autres."
    />
    </motion.div>
    </>

  )
}

export default Onboarding