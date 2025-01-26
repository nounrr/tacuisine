import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../../Redux/userSlice';
import { signIn } from '../../../Redux/authSlice';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import style from '../../../assest/css/BienvenuComp.module.css';

const SignIn = ({ setIsSignup }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [ville, setVille] = useState('');
  const [gender, setGender] = useState('femme');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const [profilePreview, setProfilePreview] = useState(null);
  const [bannerPreview, setBannerPreview] = useState(null);

  const [errors, setErrors] = useState({});

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const tempUrl = URL.createObjectURL(file);
      setProfilePreview(tempUrl);
    }
  };

  const handleBannerImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBannerImage(file);
      const tempUrl = URL.createObjectURL(file);
      setBannerPreview(tempUrl);
    }
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const validateForm = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = 'Username is required.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    }
    if (!password.trim()) {
      newErrors.password = 'Password is required.';
    }
    if (!dateOfBirth) {
      newErrors.dateOfBirth = 'Date of birth is required.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCreateAccount = () => {
    if (!validateForm()) return;

    const newUser = {
      id: Date.now().toString(),
      username,
      email,
      ville,
      gender,
      password,
      dateOfBirth: dateOfBirth ? dateOfBirth.format('YYYY-MM-DD') : null,

      profileImageName: profileImage ? profileImage.name : null,
      profileImagePreview: profilePreview,

      bannerImageName: bannerImage ? bannerImage.name : null,
      bannerImagePreview: bannerPreview,
    };

    dispatch(addUser(newUser));
    dispatch(signIn(newUser));

    navigate('/accueil');
  };

  return (
    <>
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: 2, placeSelf: 'center' }}
        className={style.form_auth}
      >
        <TextField
          label="UserName"
          variant="standard"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={Boolean(errors.username)}
          helperText={errors.username}
        />

        <TextField
          label="Email"
          variant="standard"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date de Naissance"
            value={dateOfBirth}
            onChange={(newValue) => setDateOfBirth(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                className="input-field"
                error={Boolean(errors.dateOfBirth || params.error)}
                helperText={errors.dateOfBirth || params.helperText}
              />
            )}
          />
        </LocalizationProvider>

        <TextField
          label="Ville"
          variant="standard"
          className="input-field"
          value={ville}
          onChange={(e) => setVille(e.target.value)}
        />

        <FormControl>
          <FormLabel style={{ textAlign: 'left' }}>Gender</FormLabel>
          <RadioGroup
            row
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="femme" control={<Radio />} label="Femme" />
            <FormControlLabel value="homme" control={<Radio />} label="Homme" />
          </RadioGroup>
        </FormControl>

        <FormControl variant="outlined" className="input-field">
          <InputLabel
            htmlFor="outlined-adornment-password"
            error={Boolean(errors.password)}
          >
            Password
          </InputLabel>
          <Input
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)}
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
          {errors.password && (
            <p style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px' }}>
              {errors.password}
            </p>
          )}
        </FormControl>

        <div>
          <InputLabel shrink style={{ marginBottom: '8px' }}>
            Profile Picture
          </InputLabel>
          <input
            className={style.fileInput}
            type="file"
            accept="image/*"
            onChange={handleProfileImageChange}
          />
          {profileImage && (
            <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
              Selected file: {profileImage.name}
            </p>
          )}
         
        </div>

        <div>
          <InputLabel shrink style={{ marginBottom: '8px' }}>
            Banner Image
          </InputLabel>
          <input
            className={style.fileInput}
            type="file"
            accept="image/*"
            onChange={handleBannerImageChange}
          />
          {bannerImage && (
            <p style={{ marginTop: '4px', fontSize: '0.9rem' }}>
              Selected file: {bannerImage.name}
            </p>
          )}
          
        </div>
      </div>

      <button className="aut__hbtn btn_primary" onClick={handleCreateAccount}>
        Créer un compte
      </button>

      <div className={`${style.signup_mdp_newAccount}`}>
      <h5 onClick={() => setIsSignup(true)}>Déjà inscrit ? Connectez-vous</h5>

      </div>
    </>
  );
};

export default SignIn;
