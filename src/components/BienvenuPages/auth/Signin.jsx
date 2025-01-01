import React, { useState } from 'react';
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
import style from '../../../assest/css/BienvenuComp.module.css'



const SignIn = ({ setIsSignup }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, placeSelf:"center"}} className={style.form_auth}>
        {/* UserName Field */}
        <TextField
          label="UserName"
          variant="standard"
          className="input-field"
        />
        
        {/* Email Field */}
        <TextField
          label="Email"
          variant="standard"
          className="input-field"
        />

        {/* Password Field */}
        <FormControl variant="outlined" className="input-field">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <Input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      
      <button className="aut__hbtn">Se connecter</button>
      <div className={`${style.signup_mdp_newAccount} ` }>
      <h5 onClick={() => setIsSignup(true)} >
        Déjà un compte ? Connectez-vous.
      </h5>
      </div>
    </>
  );
};

export default SignIn;
