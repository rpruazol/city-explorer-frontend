import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
  }

  handleSelect = (selectedIndex, e) => {
    this.setState({selectedIndex: selectedIndex})
  }
  render() {
    console.log(this.props)
    return (
      <Row>
        <Carousel activeIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
          {(this.props.movieArray.data) &&
            this.props.movieArray.data.map(obj => {
              return (
                  <Carousel.Item>
                    <Card className="m-auto align-self-center">
                      <Card.Img variant="top" src={obj.image_url ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${obj.image_url}` : "https://http.cat/404"} />
                      <Card.Body>
                        <Card.Title>{obj.title}</Card.Title>
                      </Card.Body>
                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>Overview: {obj.overview} </ListGroup.Item>
                        <ListGroup.Item>Vote Average: {obj.vote_average} </ListGroup.Item>
                        <ListGroup.Item>Popularity: {obj.popularity} </ListGroup.Item>
                        <ListGroup.Item>Released on: {obj.released_on} </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  </Carousel.Item>
              )
            })
          }
        </Carousel>
      </Row>
    )
  }
}