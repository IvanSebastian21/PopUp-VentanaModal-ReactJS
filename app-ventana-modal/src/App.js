import React from 'react';
import './App.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  state = {
    abierto: false,
  }

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  }

  render() {

    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }

    return (
      <>
        <div className='principal'>
          <div className='secundario'>
            <Button color="success" onClick={this.abrirModal}>Mostrar Modal</Button>
          </div>
        </div>

        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>
            Inicio de Sesión
          </ModalHeader>

          <ModalBody>
            <FormGroup color="dark">
              <Label for="usuario">Usuario</Label>
              <Input type="text" id="usuario" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Contraseña</Label>
              <Input type="text" id="password" />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary">Iniciar Sesión</Button>
            <Button color="dark" onClick={this.abrirModal}>Cerrar Sesión</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}

export default App;
