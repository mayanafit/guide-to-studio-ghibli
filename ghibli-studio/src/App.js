import React from 'react';
import './App.css';
import { Movies, Home, MyList, People } from './pages';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div>
        <section id="header" className="d-flex flex-column justify-content-center mb-3 mt-4">
          <img width="250" height="150" className="align-self-center"
          src="https://upload.wikimedia.org/wikipedia/id/b/b0/Ghibli.gif" 
          alt=""/>
        </section>
        <Router>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/movies'>
                <Movies />
              </Route>
              <Route path='/lists'>
                <MyList />
              </Route>
              <Route path='/people'>
                <People />
              </Route>
              <Route path='*'>
                <h1 className="text-center mt-5">404 Not Found.</h1>
              </Route>
            </Switch>
        </Router>
      </div>
      <footer className="mt-5 pt-5 mb-4 bg-white fix-bottom">
        <div className="container">
          <p className="m-0 text-center text-dark">
            Powered by <a href="https://ghibliapi.herokuapp.com" target="_">Studio Ghibli API</a> 2020
          </p>
        </div>
      </footer>
    </Provider>
  );
}

export default App;
