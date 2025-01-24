import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bienvenue from './components/BienvenuPages/Bienvenue';
// import Acceuil from './components/Acceuil/acceuil';
import Detail from './components/Detail/Detail';
import './assest/css/App.css';
import PhoneNav from './components/NavBar/PhoneNav';
<<<<<<< HEAD
import ProfilePage from './components/ProfilePages/ProfilePage';
=======
import Acceuil from './components/Acceuil/acceuil';
import UploadFile from './components/AjouterRecettes/comp/UploadFile';
import Page1 from './components/AjouterRecettes/Pages/Page1';
import Modal from './components/filter/drawer';
import Detail from './components/Detail/detail';
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
const App = () => {
    

    return (
<<<<<<< HEAD
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
=======
       <><Router>
            <Acceuil/>    
            <Routes>
                <Route path="/detail" element={<Detail/>} />
            </Routes>        
        </Router>
        </>
        
>>>>>>> e341ee47c4eb3628ab32d45eec66c4732f11bd3b
    );
};

export default App;
