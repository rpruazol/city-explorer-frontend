import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import MovieSingle from './MovieSingle';

export default class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
      modalShow: false
    }
  }
  handleSelect = (selectedIndex, e) => {
    this.setState({ selectedIndex: selectedIndex })
  }


  render() {
    return (
      <Carousel activeIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
        {(this.props.movieObj.data) &&
          this.props.movieObj.data.movieArray.map((obj, idx) => {
            return (
              <Carousel.Item>
                <MovieSingle
                  movie={obj}
                  id={idx}
                />
              </Carousel.Item>

            )
          })
        }
      </Carousel>
    )
  }
}