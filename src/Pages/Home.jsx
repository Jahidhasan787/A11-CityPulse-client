import React from 'react';
import Banner from '../Component/Banner';
import LatestResolve from '../Component/LatestResolve';
import Category from '../Component/Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <LatestResolve></LatestResolve>
        </div>
    );
};

export default Home;