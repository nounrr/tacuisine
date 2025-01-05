import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bienvenue from './components/BienvenuPages/Bienvenue';
import PhoneNav from './components/NavBar/PhoneNav';
const App = () => {
    

    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<Onboarding/>} /> */}
                <Route path="/" element={<PhoneNav/>} />
                {/* <Route path="/" element={<Tables/>} /> */}
            </Routes>
        </Router>
    );
};

export default App;
