import React, {useState, useEffect} from 'react';
import {Button, Form, Input} from 'reactstrap';

const FormSearch = () => {
    return(
        <>
            <Form inline className="d-flex justify-content-center">
                <Input type="text" className="mr-2" placeholder="search title..."/>
                <Button size="sm" color="info">Search</Button>
            </Form>
        </>
    )
}

export default FormSearch