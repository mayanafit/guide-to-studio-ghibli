import React from 'react';
import { Button, Table } from 'reactstrap';
import { FormSearch, TableData } from '../components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyList = () => {
    const { lists } = useSelector((state) => state);
    const history = useHistory()
    const handleClick = () => {
        history.push(`/`)
    }
    return(
        <>
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-dark mt-4 mb-3">My Watch List</h1>
                <Button className="mb-3" onClick={() => handleClick()} size="md">
                    Back to Home
                </Button>
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
                <tbody className="text-center">
                    {lists.length < 1 ? (
                        <tr>
                            <td colSpan='5'>You haven't add anything yet to your list. 😢</td>
                        </tr>
                    ) : (
                        lists.map((list, idx) => <TableData key={list.id} movieData={list} index={idx}/>)
                    )}
                </tbody>
            </Table>
        </>
    )
}

export default MyList