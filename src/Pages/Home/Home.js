import React from 'react';
import Slider from './Slider/Slider';
import Description from './Description/Description';
import Doctors1 from './Doctors1/Doctors1';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Description/>
            <Doctors1/>
            <Banner/>
        </div>
    );
};

export default Home;