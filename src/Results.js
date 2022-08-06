import React from "react";
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import ListGroup from "react-bootstrap/ListGroup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


export default class Results extends React.Component {
  render() {
    return (
      <Container fluid className="mt-5">
        <Row>
          <Col>
            <Card style={{ width: '18rem' }} className="m-auto align-self-center">
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
          </Col>
        </Row>
      </Container>
    )
  }
}