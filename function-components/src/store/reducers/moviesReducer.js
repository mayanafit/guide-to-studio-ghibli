const initState = {
    movies: [],
    movie: {},
    filteredMovies: [],
}

const moviesReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_MOVIES":
            return {
                ...state, movies: action.payload
            }
        case "SET_SEARCH_MOVIES":
            return  {
                ...state, filteredMovies: action.payload
            }
        case "SET_FILTERED_MOVIES":
            return  {
                ...state, filteredMovies: []
            }
        case "SET_MOVIE":
            return  {
                ...state, movie: action.payload
            }
        default: 
            return state
    }
}

export default moviesReducer
