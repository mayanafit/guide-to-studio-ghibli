import React, { useState } from 'react';
import { Button, Form, Input } from 'reactstrap';
import { useHistory, useLocation } from 'react-router-dom';

const FormSearch = () => {
    const history = useHistory()
    const { pathname } = useLocation()
    const [ search, setSearch ] = useState('')

    const handleChange = (val) => {
        setSearch(val.target.value)
    }

    const searchValue = (event) => {
        event.preventDefault()
        history.push(`${pathname}?search=${search}`)
    }
    return(
        <>
            <Form onSubmit={(event) => searchValue(event)} inline className="d-flex justify-content-center">
                <Input onChange={(val) => handleChange(val)}
                type="text" className="mr-2" placeholder={ pathname === `/people` || `/people/movie/:id` ? "search name..." : "search title..."}/>
                <Button size="sm" color="info">Search</Button>
            </Form>
        </>
    )
}

export default FormSearch