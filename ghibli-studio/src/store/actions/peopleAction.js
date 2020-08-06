
export const setPeople = () => {
    return (dispatch) => {
        fetch(`https://ghibliapi.herokuapp.com/people`)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({
                type: 'SET_PEOPLE',
                payload: data
            })
        })
    }
}

export const setSearchPeople = (people) => {
    return {
        type: 'SET_SEARCH_PEOPLE',
        payload: people,
    }
}

export const setFilteredPeople = () => {
    return {
        type: 'SET_FILTERED_PEOPLE'
    }
}

export const setPerson = (id) => {
    return (dispatch) => {
        fetch(`https://ghibliapi.herokuapp.com/people/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({
                type: 'SET_PERSON',
                payload: data
            })
        })
    }
}

export const setDetailMovie = (link) => {
    return (dispatch) => {
        fetch(`${link}`)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({
                type: 'SET_DETAIL_MOVIE',
                payload: data
            })
        })
    }
}