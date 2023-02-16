import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import AppRoutes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    </>
  )
};

export default App;