import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from './Main';
import Sort from './Sort';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact>
            <Main></Main>
          </Route>
          <Route path='/:slug' component={Sort}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
