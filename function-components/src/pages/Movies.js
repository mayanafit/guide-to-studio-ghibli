import React, { useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import TableData from '../components/TableData';
import { FormSearch, DetailMovie } from '../components';
import { useHistory, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useFetch from '../hooks/useFetch';

const Movies = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {movies, filteredMovies} = useSelector((state) => state)
    const handleClick = () => {
        history.push(`/`)
    }
    const [moviesData] = useFetch("https://ghibliapi.herokuapp.com/films");

    useEffect(() => {
        dispatch({
            type: 'SET_MOVIES',
            payload: moviesData,
        })
    }, [dispatch, moviesData])

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
            <Route path='/movies/:id'>
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
                { movies.length === 0 ? (
                    <tr>
                        <td colSpan='5'>Page is loading...</td>
                    </tr>
                ) : ( filteredMovies.length > 0 ? (
                    filteredMovies.map((movie, idx) => <TableData key={movie.id} movieData={movie} index={idx}/>)
                ) : (
                    movies.map((movie, idx) => <TableData key={movie.id} movieData={movie} index={idx}/>)
                )
                )}
                </tbody>
            </Table>
        </>
    )
}

export default Movies