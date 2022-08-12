import React from "react";
import Card from 'react-bootstrap/Card'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Carousel from 'react-bootstrap/Carousel';
import MovieModal from './MovieModal'


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

  setModalShow = (str, obj) => {
    this.setState({ modalShow: str}, () => console.log(this.state))
  }

  render() {
    console.log(this.props)
    return (
      <Carousel activeIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
        {(this.props.movieArray.data) &&
          this.props.movieArray.data.map((obj, idx) => {
            return (
                <Carousel.Item>
                  <Card className="m-auto align-self-center" >
                    <Card.Title>{obj.title}</Card.Title>
                    <Card.Img _id={idx} variant="top" src={obj.image_url ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${obj.image_url}` : "https://http.cat/404"} onClick={() => this.setModalShow(true)}  />
                  <MovieModal
                    modalShow={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                    detail={this.props.movieArray.data[this.state.selectedIndex]}
                    />
                  </Card>
                </Carousel.Item>
            )
          })
        }
      </Carousel>
    )
  }
}