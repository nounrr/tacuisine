import React, { useState } from 'react';
import BienvenuComp from '../comp/BienvenuComp';
import SignIn from './Signin';
import SignUp from './Signup';

function Connexion() {
  const [isSignup, setIsSignup] = useState(true);

  const titre = isSignup ? 'Connectez-vous à Kozintk' : 'Rejoignez Kozintk';

  return (
    <BienvenuComp
      bgLink="https://img.freepik.com/free-photo/young-couple-cooking-home_23-2148869615.jpg"
      title={titre}
      comp={isSignup ? () => <SignUp setIsSignup={setIsSignup} /> : () => <SignIn setIsSignup={setIsSignup} />}
    />
  );
}

export default Connexion;
