import React from 'react';
import Banner from '../Banner/Banner';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
      <div className="pb-10">
        <Banner></Banner>
        <PopularClass></PopularClass>
        <PopularInstructors></PopularInstructors>
      </div>
    );
};

export default Home;