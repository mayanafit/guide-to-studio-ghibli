import React, {useState, useEffect, useReducer} from 'react';
import { Button, Table } from 'reactstrap';
import TableData from '../components/TableData';
import useFetch from '../hooks/useFetch';
import { FormSearch, DetailMovie } from '../components';
import { useHistory, Route } from 'react-router-dom';


const Movies = () => {
    const history = useHistory()
    const [movies, error, loading] = useFetch("https://ghibliapi.herokuapp.com/films");

    const handleClick = () => {
        history.push(`/`)
    }

    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-dark mt-4 mb-3">List Movies</h1>
                <div className="d-flex mb-3">
                    <Button onClick={() => handleClick()}
                    className="margin-search" size="md">Back to Home</Button>
                    <FormSearch />
                </div>
            </div>
            <Route path='/movies/:slug'>
              <DetailMovie />
            </Route>
            <Table hover className="container">
                <thead className="text-center thead">
                    <tr>
                        <th scope="col" className="text-left">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                {loading ? (
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="text-center">Page is loading...</td>
                        <td></td>
                    </tr>
                ) : (
                    movies.map((movie, idx) => <TableData key={movie.id} movieData={movie} index={idx}/>)
                )}
                </tbody>
            </Table>
        </>
    )
}

export default Movies