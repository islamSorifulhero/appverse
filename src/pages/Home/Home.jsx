import React from 'react';
import Banner from '../../components/Banner/Banner';
import TrendingApps from '../TrendingApps/TrendingApps';
import AppsInformation from '../../components/Apps Information/AppsInformation';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AppsInformation></AppsInformation>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;