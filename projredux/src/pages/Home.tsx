import React from 'react';
import Cart from '../components/Cart';
import Catalog from '../components/Catalog';

const Home: React.FC = () => {
  return (
    <>
      <Catalog />
      <Cart />
    </>
  );
}

export default Home;