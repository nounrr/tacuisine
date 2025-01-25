import React from 'react'
import BienvenuComp from '../comp/BienvenuComp';
import { motion } from 'framer-motion';

function Onboarding3() {
  return (
    <>
     <motion.div
            initial={{ opacity: 0 }} 
            animate={{opacity: 1}} 
            exit={{opacity: 0}} 
            transition={{  duration: 0.3 }}
          >
    <BienvenuComp 
                  bgLink={process.env.PUBLIC_URL + '/img/bg3.jpg'}
                  title='Suivez vos chefs préférés. !'
                  paragraphe="Restez connectés avec vos amis et découvrez leurs nouvelles créations."
    />
    </motion.div>
    </>
  )
}

export default Onboarding3