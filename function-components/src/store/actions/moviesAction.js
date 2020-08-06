
export const setMovies = () => {
    return (dispatch) => {
        fetch("https://ghibliapi.herokuapp.com/films")
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({
                type: 'SET_MOVIES',
                payload: data,
            })
        })
    }
}

export const setFilteredMovies = () => {
    return {
        type: 'SET_FILTERED_MOVIES'
    }
}


export const setSearchMovies = (filteredMovies) => {
    return {
        type: 'SET_SEARCH_MOVIES',
        payload: filteredMovies
    }
}

export const setMovie = (id) => {
    return (dispatch) => {
        fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            dispatch({
                type: 'SET_MOVIE',
                payload: data,
            })
        })
    }
}