import { BrowserRouter, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import './styles/App.css';
import Tables from './components/Table';
import FormSelects from './components/FormSelects';


const App = () => {
  return (
    <>
      <div className='wrapper'>
        <BrowserRouter>
          <nav>
            <Link to='/'>Horários dos Alunos</Link>
            <Link to='/horarioProfessores'>Horários dos Professores</Link>
          </nav>
        </BrowserRouter>
      </div>
      <FormSelects />
      <Tables />
    </>
  )
}

export default App