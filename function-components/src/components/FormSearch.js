import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'reactstrap';

const FormSearch = () => {
    const dispatch = useDispatch()
    const [ search, setSearch ] = useState('')

    const handleChange = (val) => {
        setSearch(val.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        return dispatch({
            type: 'SET_SEARCH_MOVIES',
            payload: search,
        })
    }
    return(
        <>
            <Form onSubmit={(event) => searchValue(event)} inline className="d-flex justify-content-center">
                <Input onChange={(val) => handleChange(val)}
                type="text" className="mr-2" placeholder="search title..."/>
                <Button size="sm" color="info">Search</Button>
            </Form>
        </>
    )
}

export default FormSearch