import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default class SearchForm extends React.Component {
  
  render() {
    return (
      <Form className="mt-5 w-25 m-auto align-self-center">
        <Form.Label>Enter a City</Form.Label>
        <Form.Control type="text" placeholder="Salem" onInput={(e) => this.props.saveCity(e.target.value)} />
        <Button className="mt-2" variant="primary" type="submit" onClick={(e) => this.props.queryCity(e, this.props.city)}>Explore!</Button>
      </Form>
    )
  }
}