import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SplitLayout from '../../components/layout/split';
import Home from './home';
import Topic from '../topic';
import Node from '../node';


export default class Router extends Component {
  render() {
    return (
      <SplitLayout>
        <SplitLayout.LeftComponents>
          <Switch>
            <Route exact path='/topic/:id' component={Topic}/>
            <Route exact path='/node/:name' component={Node}/>
            <Route path='/' component={Home}/>
          </Switch>
        </SplitLayout.LeftComponents>
        <SplitLayout.RightComponents>
          侧栏
        </SplitLayout.RightComponents>
      </SplitLayout>
    )
  }
}