import React, { useEffect } from 'react';
import { Button, Table } from 'reactstrap';
import TableData from '../components/TableData';
import { FormSearch, DetailMovie } from '../components';
import { setMovies, setFilteredMovies, setSearchMovies } from '../store/actions/moviesAction';
import { useHistory, Route, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import swal from '@sweetalert/with-react';

const Movies = () => {
    const dispatch = useDispatch()
    const location = useLocation()
    const searchTemp = location.search.split('=')
    const search = searchTemp[searchTemp.length-1]
    const history = useHistory()
    const { movies, filteredMovies } = useSelector((state) => state.moviesReducer)
    const handleClick = () => {
        history.push(`/`)
    }

    useEffect(() => {
        dispatch(setMovies())
    }, [dispatch])

    useEffect(() => {

        if (!search) {
            dispatch(setFilteredMovies())
            history.push(`/movies`)
        } else {
            const regex = RegExp(`${search.toLowerCase()}*`)
            const filterMovies = movies.filter(movie => regex.test(movie.title.toLowerCase()))
            if (filterMovies.length < 1) {
                swal("Sorry!", `We can't find any movie with keywords '${search}'.`, "error")
            } else {
                dispatch(setSearchMovies(filterMovies))
            }
        }

    },[dispatch, search, history, movies])

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