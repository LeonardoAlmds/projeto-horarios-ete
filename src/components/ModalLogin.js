import React, {useState} from 'react'

import { Modal, Form, Button } from 'react-bootstrap'

const ModalLogin = ({isOpen}) => {  
  const [show, setShow] = useState(isOpen);

  if(isOpen) {
    return (
      <Modal show={show} onHide={show}>
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
            <Button variant="danger">
            Sair
            </Button>
            <Button variant="primary">
            Entrar
            </Button>
        </Modal.Footer>
      </Modal>
    )
  } 
  
  return null;
}

export default ModalLogin