import React, {useState, useEffect} from 'react';
import { Table } from 'reactstrap';
import {Button} from 'reactstrap';
import TableData from '../components/TableData';
import useFetch from '../hooks/useFetch';

const Movies = () => {

    const [movies, error, loading] = useFetch("https://ghibliapi.herokuapp.com/films");

    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-dark mt-4 mb-3">List Movies</h1>
                <Button size="md" className="mb-3">Back to Home</Button>
            </div>
            <Table hover className="container">
                <thead className="text-center thead">
                    <tr>
                        <th scope="col" className="text-left">No.</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Release Date</th>
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