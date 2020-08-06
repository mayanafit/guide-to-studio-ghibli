import React, { useEffect } from 'react';
import { Row, Button } from 'reactstrap';
import { DetailMovie, FormSearch, CardPeople } from '../components';
import { Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setPeople, setFilteredPeople, setSearchPeople } from '../store/actions/peopleAction';
import swal from '@sweetalert/with-react';

const People = () => {
    const history = useHistory()
    const { search } = useLocation()
    const searchTemp = search.split(`=`)
    const searchValue = searchTemp[searchTemp.length-1]
    const { people, filteredPeople } = useSelector((state) => state.peopleReducer)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(setPeople())
    }, [dispatch])

    useEffect(() => {
        if (!searchValue) {
            dispatch(setFilteredPeople())
            history.push(`/people`)
        } else {
            const regex = RegExp(`${searchValue.toLowerCase()}*`)
            const filterPeople = people.filter(people => regex.test(people.name.toLowerCase()))
            if (filterPeople.length < 1) {
                swal("Sorry!", `We can't find any person with keywords '${searchValue}'.`, "error")
            } else {
                dispatch(setSearchPeople(filterPeople))
            }
        }
    }, [dispatch, searchValue, people, history])
    
    const handleClick = () => {
        history.push(`/`)
    }

    return(
        <>
            <div className="container">
                <Route path='/people/movie/:id'>
                <DetailMovie />
                </Route>
                <div className="d-flex flex-column align-items-center">
                    <h1 className="text-center">People</h1>
                    <div className="d-flex mb-3">
                        <Button onClick={() => handleClick()}
                        className="margin-search" size="md">Back to Home</Button>
                        <FormSearch />
                    </div>
                </div>
                
                    { people.length === 0 ? (
                        <div className="text-center">
                            <h1>Page is loading...</h1>
                        </div>
                    ) : ( filteredPeople.length > 0 ? (
                        <Row className="text-center">
                        {filteredPeople.map((person) => <CardPeople key={person.id} personData={person}/>)}
                        </Row>
                    ) : (
                        <Row className="text-center">
                        {people.map((person) => <CardPeople key={person.id} personData={person}/>)}
                        </Row>
                    )
                    )}
                
            </div>
        </>
    )
}

export default People