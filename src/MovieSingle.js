import React from 'react';
import MovieModal from './MovieModal';
import Card from 'react-bootstrap/Card'



export default class MovieSingle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            modalShow: false
        }
    }
    setModalShow = (str, obj) => {
        this.setState({ modalShow: str }, () => console.log(this.state))
    }

    render() {
        return (
                <Card className="m-auto align-self-center" >
                    <Card.Title>{this.props.movie.title}</Card.Title>
                    <Card.Img _id={this.props.idx} variant="top" src={this.props.movie.image_url ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${this.props.movie.image_url}` : "https://http.cat/404"} onClick={() => this.setModalShow(true)} />
                    <MovieModal
                        modalShow={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}
                        detail={this.props.movie}
                    />
                </Card>
        )
    }
}
