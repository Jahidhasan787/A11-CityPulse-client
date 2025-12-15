import React from 'react';
import Banner from './Home/Banner';
import LatestResolve from './Home/LatestResolve';
import Category from './Home/Category';
import Work from './Home/Work';
import Features from './Home/Features';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <LatestResolve></LatestResolve>
            <Work></Work>
            <Features></Features>
        </div>
    );
};

export default Home;