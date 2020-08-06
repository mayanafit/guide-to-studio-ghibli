import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer, listsReducer, moviesReducer } from './reducers';


const reducers = combineReducers({
    homeReducer, listsReducer, moviesReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store