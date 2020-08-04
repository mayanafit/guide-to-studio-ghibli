import React, {useState, useEffect} from 'react';
import Movies from './Movies';
import {Button} from 'reactstrap';

const Home = () => {
    const [moviePage, setMoviePage] = useState(false)
    const [homePage, setHomePage] = useState(true)

    const changeToMovies = () => {
        setHomePage(false)
        setMoviePage(true)
    }

    return (
        <>
            <section id="header" className="d-flex flex-column justify-content-center mb-5 mt-4">
                <img width="250" height="150" className="align-self-center"
                src="https://upload.wikimedia.org/wikipedia/id/b/b0/Ghibli.gif" 
                alt=""/>
                {
                    homePage && <div className="mt-5 d-flex flex-column">
                                    <Button id="guidance">
                                        <h1 className="text-center">Guidance</h1>
                                    </Button>
                                    <Button id="films" onClick={() => changeToMovies()}>
                                        <h1 className="text-center">Films</h1>
                                    </Button>
                                </div>
                }
                {
                    moviePage && <Movies />
                }
            </section>
        </>
    )

}

export default Home