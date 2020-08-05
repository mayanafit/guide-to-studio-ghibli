import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Guidance from './Guidance';
import { useDispatch } from 'react-redux';
import {
    Link
} from 'react-router-dom';

const Home = () => {
    const [guidance, setGuidance] = useState(false)
    const dispatch = useDispatch()
    const handleClick = () => setGuidance(!guidance)
    const handleButtonRemove = () => {
        dispatch({
            type: 'SET_BUTTON_REMOVE',
            payload: false,
        })
        dispatch({
            type: 'SET_FILTERED_MOVIES',
        })
    }
    const handleButtonAdd = () => {
        dispatch({
            type: 'SET_BUTTON_REMOVE',
            payload: true,
        })
    }

    return (
        <>
           <div className="mt-5 d-flex flex-column">
                <Button onClick={() => handleClick()} id="guidance">
                    <h1 className="text-center">Guidance</h1>
                </Button>
                {
                  guidance && <Guidance />
                }
                <Link onClick={() => handleButtonRemove()} id="films" to='/movies'>
                    <h1 className="text-center">Movie</h1>
                </Link>
                <Link onClick={() => handleButtonAdd()} id="favorites" to='/lists'>
                    <h1 className="text-center">My Watch List</h1>
                </Link>
            </div>
        </>
    )

}

export default Home