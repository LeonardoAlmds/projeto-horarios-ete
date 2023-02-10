import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import React, { useState } from 'react'
import '../styles/HeaderSite.css';
import EteLogo from '../images/ETE.png'

const HeaderSite = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='wrapper'>
            <nav>
                <div className='Links'>
                    <img src={EteLogo} alt="logo-ETE"/>
                    <Link to='/'>Horários dos Alunos</Link> <hr/>
                    <Link to='/horarioProfessores'>Horários dos Professores</Link> <hr/>
                    <Link to='/horarioRefeicoes'>Horários das Refeições</Link> <hr/>
                    <Link to='/cardapio'>Cardápio da Semana</Link> <hr/>
                    <Link to=''><Button variant="success" className='button' onClick={handleShow}>Login</Button></Link>
                </div> 
            </nav>
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
    )
}

export default HeaderSite