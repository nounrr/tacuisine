import React, { useState } from "react";
import BienvenuComp from "../comp/BienvenuComp";
import SignUp from "./Signup";
import SignIn from "./Signin";

function Connexion() {
  const [isSignup, setIsSignup] = useState(false); // Gérer le mode SignIn/SignUp

  const titre = isSignup ? "Rejoignez Kozintk" : "Connectez-vous à Kozintk";

  return (
    <BienvenuComp
      bgLink="https://img.freepik.com/free-photo/young-couple-cooking-home_23-2148869615.jpg"
      title={titre}
      comp={isSignup ? <SignUp setIsSignup={setIsSignup} /> : <SignIn setIsSignup={setIsSignup} />}
    />
  );
}

export default Connexion;
