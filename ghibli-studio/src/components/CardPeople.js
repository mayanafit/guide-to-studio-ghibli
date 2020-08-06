import React from 'react';
import { Col, Card, CardBody, CardTitle, CardFooter } from 'reactstrap';
import { Link } from 'react-router-dom';

const CardPeople = ({personData}) => {
    const { name, gender, age, films } = personData
    const filmTemp = films[0].split(`/`)
    const filmId = filmTemp[filmTemp.length-1]

    return (
        <>
            <Col xs={3} className="mt-4">
                <Card style={{ backgroundColor: '#E2CE45', borderColor: '#E2CE45' }} className="cardHeight">
                    <CardBody>
                        <CardTitle>
                            <i className="fa fa-user icon" aria-hidden="true"></i>
                        </CardTitle>
                        <div className="d-flex flex-column mb-3">
                            <span className="titleCard">{name}</span>
                            <span className="titleGender">{gender}</span>
                            <span className="titleAge">{isNaN(Number(age)) ? age : age === "" ? `NA` : `${age} y.o`}</span>
                        </div>
                    </CardBody>
                    <CardFooter>
                        <Link to={{
                            pathname: `/people/movie/${filmId}`,
                            state: { modalStat: true }
                        }} className="linkMovie">
                            <i className="fa fa-eye" aria-hidden="true"></i>
                            &nbsp;Movie
                        </Link>
                    </CardFooter>
                </Card>
            </Col>
        </>

 )
}

export default CardPeople