import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/authSlice';  // Adjust path as needed
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import '../../../assest/css/mui.css';
import style from '../../../assest/css/BienvenuComp.module.css';

const SignUp = ({ setIsSignup }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (e) => e.preventDefault();

  const handleSignIn = () => {
    // Nettoyage des données saisies (supprime les espaces superflus)
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
  
    // Recherche de l'utilisateur dans la liste
    const foundUser = users.find(
      (u) => u.email === trimmedEmail && u.password === trimmedPassword
    );
  
    if (!foundUser) {
      alert('Email ou mot de passe incorrect.');
      return;
    }
  
    // Connexion réussie
    dispatch(signIn(foundUser));
    navigate('/accueil');
  };
  

  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, placeSelf: 'center' }}
        className={style.form_auth}
      >
        <TextField
          label="Email"
          variant="standard"
          className="input-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormControl variant="outlined" className="input-field">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <Input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <button className="aut__hbtn btn_primary" onClick={handleSignIn}>
        Se connecter
      </button>

      <div className={`${style.signup_mdp_newAccount} flex`}>
      <h5 onClick={() => setIsSignup(false)}>Pas encore inscrit ? Créez un compte</h5>
        <br />
        <h5>Mot de passe oublié</h5>
      </div>
    </>
  );
};

export default SignUp;
