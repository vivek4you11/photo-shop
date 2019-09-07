import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage/Login';
import Homepage from '../HomePage/HomePage';
import ItemPage from '../ItemPage/ItemPage';

const NoMatchComponent = ({ location }) => {
  return (
    <div>
      <h3>
        No Match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="homePage">
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/home" component={Homepage} />
            <Route exact path="/home/:id" component={ItemPage} />
            <Route component={NoMatchComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
