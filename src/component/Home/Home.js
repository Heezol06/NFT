import React from 'react';
import Navbar from '../Common/Navbar';
import AboutMomento from './AboutMomento/AboutMomento';
import SpecialtyMomento from './SpecialtyMomento/SpecialtyMomento';
import WelcomeMomento from './WelcomeMomento/WelcomeMomento';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <WelcomeMomento></WelcomeMomento>
            <AboutMomento></AboutMomento>
            <SpecialtyMomento></SpecialtyMomento>
        </div>
    );
};

export default Home;