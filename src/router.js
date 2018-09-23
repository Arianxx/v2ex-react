import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './containers/app';
import Home from './containers/app/home';


export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path='/' exact component={Home}/>
          </Switch>
        </App>
      </Router>
    )
  }
}