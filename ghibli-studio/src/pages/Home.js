import React, { useState } from 'react';
import { Button } from 'reactstrap';
import Guidance from './Guidance';
import { setFilteredMovies } from '../store/actions/moviesAction';
import { setButtonRemove } from '../store/actions/homeAction';
import { useDispatch } from 'react-redux';
import {
    Link
} from 'react-router-dom';

const Home = () => {
    const [guidance, setGuidance] = useState(false)
    const dispatch = useDispatch()
    const handleClick = () => setGuidance(!guidance)
    const handleButtonRemove = () => {
        dispatch(setButtonRemove(false))
        dispatch(setFilteredMovies())
    }
    const handleButtonAdd = () => {
        dispatch(setButtonRemove(true))
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
                    <h1 className="text-center">Movies</h1>
                </Link>
                <Link onClick={() => handleButtonAdd()} id="favorites" to='/lists'>
                    <h1 className="text-center">My Watch List</h1>
                </Link>
                <Link id="people" to='/people'>
                    <h1 className="text-center">People in Studio Ghibli</h1>
                </Link>
            </div>
        </>
    )

}

export default Home