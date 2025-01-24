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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel'
import '../../../assest/css/mui.css'; 
import style from '../../../assest/css/BienvenuComp.module.css'



const SignIn = ({ setIsSignup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, placeSelf:"center"}} className={style.form_auth}>
        <TextField
          label="UserName"
          variant="standard"
          className="input-field"
        />
        
        <TextField
          label="Email"
          variant="standard"
          className="input-field"
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
          variant="standard"
          
            label="Date de Naissance"
            value={dateOfBirth}
            onChange={(newValue) => setDateOfBirth(newValue)}
            renderInput={(params) => <TextField {...params} variant="standard" className="input-field" />}
          />
        </LocalizationProvider>

       <TextField
          label="ville"
          variant="standard"
          className="input-field"
        />
         <FormControl>
      <FormLabel style={{textAlign:"left"}} id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="femme" control={<Radio />} label="Femme" />
        <FormControlLabel value="homme" control={<Radio />} label="Homme" />
       
      </RadioGroup>
    </FormControl>

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
      
      <button className="aut__hbtn btn_primary">Se connecter</button>
      <div className={`${style.signup_mdp_newAccount} ` }>
      <h5 onClick={() => setIsSignup(true)} >
        Déjà un compte ? Connectez-vous.
      </h5>
      </div>
    </>
  );
};

export default SignIn;
