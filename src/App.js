import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bienvenue from './components/BienvenuPages/Bienvenue';
/*import Tables from './Tables';*/
import PhoneNav from './components/NavBar/PhoneNav';
import Acceuil from './components/Acceuil/acceuil';
import UploadFile from './components/AjouterRecettes/comp/UploadFile';
import Page1 from './components/AjouterRecettes/Pages/Page1';
import Modal from './components/filter/Modal';
const App = () => {
    

    return (
       /* <Router>
            <Routes>
                  
                <Route path="/" element={<Page1/>} />
                
            </Routes>

            <Acceuil/>
            
        </Router>*/
        <><Modal/></>
        
    );
};

export default App;
