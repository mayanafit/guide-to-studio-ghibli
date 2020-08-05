import React from 'react';
import './App.css';
import { Movies, Home, MyList } from './pages';
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
              <Route exact path='/lists'>
                <MyList />
              </Route>
            </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
