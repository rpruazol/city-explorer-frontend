import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import Card from 'react-bootstrap/Card'

export default class Weather extends React.Component {



  render() {
    return (
      <>
        <ListGroup.Item className="p-3" variant="info">Weather</ListGroup.Item>
        <ListGroup horizontal className="list-group-flush">


          {this.props.weather.forecastArray ?
            this.props.weather.forecastArray.map(obj => {
              return (
                <>
                <ListGroup>
                  <ListGroup.Item>{obj.date}</ListGroup.Item>
                  <ListGroup.Item>{obj.description} </ListGroup.Item>
                </ListGroup>
                </>

              )
            })
            : <Card style={{ width: '18rem' }} className="m-auto align-self-center mt-5">
              <Card.Img variant="top" src={`https://http.cat/${this.props.error}`} />
            </Card>
          }
        </ListGroup>
      </>
    )
  }
}