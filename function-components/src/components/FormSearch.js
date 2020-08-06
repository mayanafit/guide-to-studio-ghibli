import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const FormSearch = () => {
    const history = useHistory()
    const [ search, setSearch ] = useState('')

    const handleChange = (val) => {
        setSearch(val.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        history.push(`/movies?search=${search}`)
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