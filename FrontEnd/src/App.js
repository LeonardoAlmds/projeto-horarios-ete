import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react'
import AppRoutes from './Routes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Loading from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2500)
  }, [])

  return (
    <>
    {
      loading ?
      <Loading/>
      :
      <BrowserRouter>
        <NavBar/>
        <AppRoutes />
        <Footer/>
      </BrowserRouter>
    }
    </>
  )
};

export default App;