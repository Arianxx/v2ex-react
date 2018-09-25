import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './containers/home';


export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    )
  }
}