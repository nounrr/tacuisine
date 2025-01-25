import React from 'react'
import BienvenuComp from '../comp/BienvenuComp'
import { motion } from 'framer-motion';

function Onboarding2() {
  return (
    <>
     <motion.div
       initial={{ opacity: 0 }} 
       animate={{opacity: 1}} 
       exit={{opacity: 0}} 
       transition={{  duration: 0.3 }}
      >
    <BienvenuComp 
                  bgLink={ process.env.PUBLIC_URL + '/img/bg2.jpg'}
                  title='Partagez vos Recettes !'
                  paragraphe="Publiez vos recettes avec des photos alléchantes et inspirez la communauté."
    />
    </motion.div>
    </>
  )
}

export default Onboarding2