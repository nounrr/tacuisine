import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Onboarding from './onboarding/Onboarding';
import Onboarding2 from './onboarding/Onboarding2';
import Onboarding3 from './onboarding/Onboarding3';
import Connexion from './auth/Connexion';


// Steps Array with Custom Components
const steps = [
  {
    component: <Onboarding />,
  },
  {
    component: <Onboarding2 />,
  },
  {
    component: <Onboarding3 />,
  },
  {
    component: <Connexion />,
  },
  
];

export default function Bienvenue() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 ,padding:"0px"}}>
     

      {/* Step Content */}
      <Box sx={{ height: "100vh", maxWidth: "100vw", width: '100%', p: 0 ,overflow:"hidden"}}>
        {steps[activeStep].component}
      </Box>

      {/* Navigation Buttons */}
      <MobileStepper style={{background:"transparent",  width: activeStep !== maxSteps - 1 ? "100%" : "50%" }}
      sx={{
    
        '& .MuiMobileStepper-dotActive': {
          backgroundColor: 'gold', // Couleur pour le dot actif
        },
      }}
        variant="dots"
        steps={maxSteps}
        position="bottom"
        activeStep={activeStep}
        nextButton={
          //si la derniere page hide button suivante
          activeStep !== maxSteps - 1 ? 
           <button className='btn_primary'
          onClick={handleNext}
          disabled={activeStep === maxSteps - 1}
        >
          Suivant
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </button>
          : <></>
          

        }
        backButton={
          <button className='btn_primary' size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </button>
        }
      />
    </Box>
  );
}
