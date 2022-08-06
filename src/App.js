import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results';
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      locationObj: null,
      map: null,
      error: ''
    }
  }
  saveCity = (value) => {
    console.log(value)
    this.setState({ city: value })
  }

  queryCity = async (e, city) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'get',
        url: `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ}&q=${city}&format=json`,
        responseType: 'stream'
      })
      this.setState({ locationObj: response.data[0] }, () => this.queryMap())
    } catch (e) {
      this.setState({ locationObj: null })
      this.setState({ error: e.message })
    } finally {
      console.log('something went wrong.')
    }
  }

  queryMap = async () => {
  
  const mapResponse = await axios({
    method: 'get',
    url: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ}&center=${this.state.locationObj.lat},${this.state.locationObj.lon}&zoom=18`,
    responseType: 'blob'
  })
  let reader = new window.FileReader();
  reader.readAsDataURL(mapResponse.data)
  reader.onload = () => {
    console.log(reader.result)
    this.setState({ map: reader.result })
  }
}

  render() {

    return (
      <div className="App">
        <SearchForm
          saveCity={this.saveCity}
          queryCity={this.queryCity}
          city={this.state.city}
        />
        {(this.state.locationObj) ?
          <Results
            location={this.state.locationObj}
            map={this.state.map}
          />
          : <h1>{this.state.error}</h1>
        }
      </div>
    )
  }
}