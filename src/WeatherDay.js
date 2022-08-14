import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


export default class WeatherDay extends React.Component {
    render() {
        return (
            <ListGroup>
                <ListGroup.Item>{this.props.weather.date}</ListGroup.Item>
                <ListGroup.Item>{this.props.weather.description} </ListGroup.Item>
            </ListGroup>
        )
    }
}

