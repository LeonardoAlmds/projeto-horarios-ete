import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import AppRoutes from './Routes';
import HeaderSite from './components/HeaderSite';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderSite/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  )
};

export default App;