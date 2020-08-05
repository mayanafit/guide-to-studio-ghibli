import React, {useState, useEffect} from 'react';
import {Button} from 'reactstrap';
import Guidance from './Guidance';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Home = () => {
    const [guidance, setGuidance] = useState(false)

    const handleClick = () => setGuidance(!guidance)

    return (
        <>
           <div className="mt-5 d-flex flex-column">
                <Button onClick={() => handleClick()} id="guidance">
                    <h1 className="text-center">Guidance</h1>
                </Button>
                {
                  guidance && <Guidance />
                }
                <Link id="films" to='/movies'>
                    <h1 className="text-center">Films</h1>
                </Link>
                <Link id="favorites" to='/lists'>
                    <h1 className="text-center">My List</h1>
                </Link>
            </div>
        </>
    )

}

export default Home