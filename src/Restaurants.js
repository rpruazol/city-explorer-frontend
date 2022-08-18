import React from "react";
import ListGroup from "react-bootstrap/ListGroup"
import Card from 'react-bootstrap/Card'
// import RestaurantSingle from './RestaurantSingle'




export default class Restaurants extends React.Component {
  render(){
    return (
      <>
      <ul>
        {this.props.restaurants &&
        this.props.restaurants.map(restaurant => {
          return (
            <li>{restaurant.name}</li>
          )
        })}
        </ul>
      </>
    )
  }
}