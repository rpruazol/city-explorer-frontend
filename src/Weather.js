import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import Card from 'react-bootstrap/Card'
import WeatherDay from './WeatherDay'

export default class Weather extends React.Component {

// Within your Weather component, create a nested component, `WeatherDay`, to render a single day's forecast. Map over the result to convert the raw response data into an array of these components.

  render() {
    return (
      <>
        <ListGroup.Item className="p-3" variant="info">Weather</ListGroup.Item>
        <ListGroup horizontal className="list-group-flush">


          {this.props.weather.forecastArray ?
            this.props.weather.forecastArray.map(obj => {
              return (
                <WeatherDay
                weather={obj}
                 />

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