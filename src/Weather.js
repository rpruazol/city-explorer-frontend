import React from "react";
import ListGroup from "react-bootstrap/ListGroup"

export default class Weather extends React.Component {



  render() {
    console.log(this.props.forecastArray.data)
    return (
      <>
      <ListGroup className="list-group-flush">


        <ListGroup.Item className="b" variant="info">Weather</ListGroup.Item>
        {this.props.forecastArray.data ?
          this.props.forecastArray.data.map(obj => {
            return (
              <>
                  <ListGroup.Item>[{obj.date}] - {obj.description} </ListGroup.Item>
              </>

            )
          })
          : <ListGroup.Item variant="danger">{this.props.error} </ListGroup.Item>
        }
              </ListGroup>
      </>
    )
  }
}