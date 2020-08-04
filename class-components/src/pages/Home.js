import React, {Component} from 'react';
import Movies from './Movies';
import Guidance from './Guidance';
import DetailMovie from '../components/DetailMovie';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tableMovie: false,
            guidance: false,
            detailMovie: false,
            movies: [],
        }
    }

    componentDidMount() {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({movies: data})
        })
    }

    setMovieTable() {
        return this.setState({tableMovie: !this.state.tableMovie})
    }

    setGuidance() {
        return this.setState({guidance: !this.state.guidance})
    }

    render() {
        return(
            <>
                <section id="header" className="d-flex flex-column justify-content-center my-5">
                    <img width="250" height="150" className="align-self-center"
                    src="https://upload.wikimedia.org/wikipedia/id/b/b0/Ghibli.gif" 
                    alt=""/>
                    <div className="mt-5 d-flex flex-column">
                        <button id="guidance" onClick={() => this.setGuidance()} className="btn">
                            <h1 className="text-center">Guidance</h1>
                        </button>
                        {
                            this.state.guidance && <Guidance/>
                        }
                        <button id="films" onClick={() => this.setMovieTable()} className="btn">
                            <h1 className="text-center">Films</h1>
                        </button>
                    </div>
                </section>
                {
                    this.state.tableMovie && <Movies movies={this.state.movies}/>
                }
                {
                    this.state.detailMovie && <DetailMovie />
                }
            </>
        )
    }
}

export default Home