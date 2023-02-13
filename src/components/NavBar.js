import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import '../styles/NavBar.css';
import EteLogo from '../images/ETE.png'
import { Modal, Form, Button } from 'react-bootstrap'

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        <Button variant="danger" className='buttonLogin'onClick={handleShow}>
          Login
        </Button>
      </nav>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>E-mail:</Form.Label>
                  <Form.Control type="email" placeholder="Insira seu email aqui..." />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" placeholder="Insira sua senha..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Lembrar de mim" />
              </Form.Group>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
              Sair
              </Button>
              <Button variant="primary" onClick={handleClose}>
              Entrar
              </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default NavBar