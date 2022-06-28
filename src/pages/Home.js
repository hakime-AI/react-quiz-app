import React from 'react';
import Questions from '../components/Questions';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation/>
            <Questions/>
        </div>
    );
};

export default Home;