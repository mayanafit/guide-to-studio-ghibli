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
            movie: {}
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
        this.componentDidMount()
        return this.setState({
            tableMovie: !this.state.tableMovie,
            detailMovie: false,
        })
    }

    setGuidance() {
        return this.setState({guidance: !this.state.guidance})
    }
    
    searchResult(search) {
        if (!search) {
            return this.componentDidMount()
        } else {
            let regex = RegExp(`${search.toLowerCase()}*`)
            let filteredMovies = this.state.movies.filter(movie => regex.test(movie.title.toLowerCase()))
            return this.setState({movies: filteredMovies})
        }
    }

    detailMovie(val) {
        fetch(`https://ghibliapi.herokuapp.com/films/${val}`)
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({movie: data})
        })
        return this.setState({
            detailMovie: !this.state.detailMovie,
            tableMovie: !this.state.tableMovie
        })
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
                    this.state.tableMovie && <Movies detailValue={(val) => this.detailMovie(val)}
                    fromSearch={(search) => this.searchResult(search)} movies={this.state.movies}/>
                }
                {
                    this.state.detailMovie && <DetailMovie movie={this.state.movie} />
                }
            </>
        )
    }
}

export default Home