import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react'

export default class MovieModal extends React.Component  {
  render(){
    return (
      <Modal
        show={this.props.modalShow}
        size="lg"
        onHide={this.props.onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{this.props.detail.title}</h4>
          <p>
          {this.props.detail.overview}
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={this.props.onHide}>Close</Button>
      </Modal.Footer>
      </Modal>
    );
  }
}