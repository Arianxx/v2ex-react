import React, {Component} from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';

import App from './containers/app';
import Home from './containers/home';


export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Home/>
        </App>
      </Router>
    )
  }
}