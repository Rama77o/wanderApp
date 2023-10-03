import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Discount from './components/Discount/Discount';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Review from './components/Review/Review';
import Tours from './components/Tours/Tours';
import Staff from './components/Staff/Staff';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Cards/>
      <Tours/>
      <Discount/>
      <Review/>
      <Staff/>
      <Footer/>
    </div>
  );
}

export default App;


