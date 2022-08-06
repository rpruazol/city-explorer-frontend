import React from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"

export default class Results extends React.Component {
  render() {
    return (
      <Container>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={this.props.map} />


              <Card.Body>
                <Card.Title>{this.props.location.display_name}</Card.Title>
                <Card.Text>
                  Lorum ipsum
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Lat:{this.props.location.lat}</ListGroup.Item>
                <ListGroup.Item>Lon:{this.props.location.lon}</ListGroup.Item>
              </ListGroup>
            </Card>
      </Container>

    )
  }
}