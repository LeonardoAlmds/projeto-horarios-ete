import { BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './styles/App.css';
import AppRoutes from './Routes';
import EteLogo from './images/ETE.png'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='wrapper'>
        <nav>
            <div className='Links'>
              <img src={EteLogo} alt="logo-ETE"/>
              <Link to='/'>Horários dos Alunos</Link> <hr/>
              <Link to='/horarioProfessores'>Horários dos Professores</Link> <hr/>
              <Link to='/horarioRefeicoes'>Horários das Refeições</Link> <hr/>
              <Link to='/cardapio'>Cardápio do Dia</Link> <hr/>
            </div> 
          </nav>
        </div>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
};

export default App;