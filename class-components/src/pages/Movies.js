import React, {Component} from 'react';
import TableData from '../components/TableData';
import FormSearch from '../components/FormSearch';

class Movie extends Component {
    constructor() {
        super()
        this.state={
            searchValue: ''
        }
    }

    searchResult(val) {
        this.props.fromSearch(val) 
    }

    detailMovie(val) {
        this.props.detailValue(val)
    }

    render() {
        return(
            <>
                <FormSearch onSubmit={(val) => this.searchResult(val)} />
                <section className="container my-4" id="content">
                    <table className="table table-hover">
                        <thead className="text-center thead">
                        <tr>
                            <th scope="col" className="text-left">No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Release Date</th>
                        </tr>
                        </thead>
                        <tbody className="text-center">
                            {this.props.movies.map((movie, idx) => {
                                return <TableData detailValue={(val) => this.detailMovie(val)}
                                key={movie.id} movieData={movie} idx={idx}/> 
                            })}
                        </tbody>
                    </table>
                </section>
            </>
        )
    }
}

export default Movie