import { createStore } from 'redux';
import swal from '@sweetalert/with-react';

const initState = {
    lists: [],
    movies: [],
    filteredMovies: [],
    buttonRemove: false,
}

const lists = (state = initState, action) => {
    switch (action.type) {
        case "SET_LISTS":  
            return {
                ...state, lists: state.lists.concat(action.payload)
            };
        case "DELETE_LIST":
            return {
                ...state, lists: state.lists.filter(list => list.id !== action.payload.id)
            }
        case "SET_BUTTON_REMOVE":
            return {
                ...state, buttonRemove: action.payload
            }
        case "SET_MOVIES":
            return {
                ...state, movies: action.payload
            }
        case "SET_SEARCH_MOVIES":
            if (!action.payload) {
                return  {
                    ...state, filteredMovies: []
                }
            } else {
                const regex = RegExp(`${action.payload.toLowerCase()}*`)
                const filterMovies = state.movies.filter(movie => regex.test(movie.title.toLowerCase()))
                if (filterMovies.length < 1) {
                    swal("Sorry!", `We can't find any movie with keywords '${action.payload}'.`, "error")
                } else {
                    return  {
                        ...state, filteredMovies: filterMovies
                    }
                }
            }
        default: 
            return state
    }
}

const store = createStore(lists)

export default store