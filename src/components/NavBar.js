import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import '../styles/NavBar.css';
import EteLogo from '../images/ETE.png'
import ModalLogin from './ModalLogin'
import { Button } from 'react-bootstrap'

const NavBar = () => {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <nav className='wrapper'>
        <img src={EteLogo} alt="logo-ETE"/>

        <div className='Links'>
          <Link to='/'>Horários dos Alunos</Link> <hr/>
          <Link to='/horarioProfessores'>Horários dos Professores</Link> <hr/>
          <Link to='/horarioRefeicoes'>Horários das Refeições</Link> <hr/>
          <Link to='/cardapio'>Cardápio da Semana</Link> <hr/>
        </div>
        <Button variant="danger" className='buttonLogin' onClick={ () => setOpenModal(true) }>
          Login
          <ModalLogin isOpen={openModal} />
        </Button>
        {console.log(openModal)}
      </nav>
    </>
  )
}

export default NavBar