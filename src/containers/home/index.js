import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import App from '../app';
import Home from './home';
import SplitLayout from '../../components/layout/split';


export default class Router extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <Switch>
              <Route exact path={`${this.props.match.url}`} component={Home}/>
            </Switch>
          </SplitLayout.LeftComponents>
          <SplitLayout.RightComponents>
            侧栏
          </SplitLayout.RightComponents>
        </SplitLayout>
      </App>
    )
  }
}