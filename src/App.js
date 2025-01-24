import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Acceuil from './components/Acceuil/acceuil';
import './assest/css/App.css';
import PhoneNav from './components/NavBar/PhoneNav';
import ProfilePage from './components/ProfilePages/ProfilePage';

const App = () => {
    

    return (
        <>
    <PhoneNav/>

    <Router>
            <Routes>
                  
                {/* <Route path="/" element={<Bienvenue/>} /> */}
                <Route path="/" element={<ProfilePage/>} />
                {/* <Route path="/deatail/:id" element={<Detail/>} /> */}
                
            </Routes>
            
    </Router>
    </>
      
    );
};

export default App;
