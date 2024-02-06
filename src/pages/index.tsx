import React from 'react';
import GlobalLayout from '../layout/GlobalLayout';
import HomeSection from '../components/sections/Home';

const Home: React.FC = () => {
  return (
    <GlobalLayout>
      <HomeSection />
    </GlobalLayout>
  );
};

export default Home;
