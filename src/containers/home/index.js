import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import SplitLayout from '../../components/layout/split';
import Home from './home';
import Topic from '../topic';
import Node from '../node';
import User from '../user';
import RightNavNewestTopics from '../../components/rightNav/newestTopics';
import RightNavHotTopics from '../../components/rightNav/hotTopics';
import RightNavSiteInfo from '../../components/rightNav/siteInfoNav';


export default class Router extends Component {
  render() {
    return (
      <SplitLayout>
        <SplitLayout.LeftComponents>
          <Switch>
            <Route exact path='/topic/:id' component={Topic}/>
            <Route exact path='/node/:name' component={Node}/>
            <Route exact path='/user/:username' component={User}/>
            <Route path='/' component={Home}/>
          </Switch>
        </SplitLayout.LeftComponents>
        <SplitLayout.RightComponents>
          <RightNavNewestTopics/>
          <RightNavHotTopics/>
          <RightNavSiteInfo/>
        </SplitLayout.RightComponents>
      </SplitLayout>
    )
  }
}