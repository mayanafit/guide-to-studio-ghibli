import React, { useState } from 'react';
import { Button, Table } from 'reactstrap';
import { FormSearch } from '../components';
import { useHistory } from 'react-router-dom';

const MyList = () => {

    const history = useHistory()
    const handleClick = () => {
        history.push(`/`)
    }
    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-dark mt-4 mb-3">My List</h1>
                <div className="d-flex mb-3">
                    <Button onClick={() => handleClick()}
                    className="margin-search" size="md">Back to Home</Button>
                    <FormSearch />
                </div>
            </div>
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
            </Table>
        </>
    )
}

export default MyList