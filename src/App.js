import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SearchForm from './SearchForm';
import Results from './Results'
import axios from 'axios';


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: '',
      locationObj: null
    }
  }
  saveCity = (value) => {
    console.log(value)
    this.setState({ city: value })
  }

  queryCity = async (e, city) => {
    e.preventDefault();
    const response = await axios({
      method: 'get',
      url: `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION_IQ}&q=${city}&format=json`,
      responseType: 'stream'
    })
      this.setState({ locationObj: response.data[0] })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <SearchForm
          saveCity={this.saveCity}
          queryCity={this.queryCity}
          city={this.state.city}
        />
        {(this.state.locationObj) &&
          <Results
            location={this.state.locationObj}
          />
        }
      </div>
    )
  }
}