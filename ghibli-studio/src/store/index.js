import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, listsReducer, moviesReducer, peopleReducer } from './reducers';


const reducers = combineReducers({
    homeReducer, listsReducer, moviesReducer, peopleReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store