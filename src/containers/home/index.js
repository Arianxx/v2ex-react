import React, {Component} from 'react';

import App from '../app/index';
import SplitLayout from '../../components/layout/split';
import {SubNode} from "./components/subNav";

import json from './components/nav.json';


import {store} from "../../redux/store";
import {actions} from "../../redux/modules/app";


export default class Index extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <SubNode nodes={json.nav[0].subNode}/>
            <button onClick={() => store.dispatch(actions.startPageLoading())}>加载</button>
          </SplitLayout.LeftComponents>
          <SplitLayout.RightComponents>
            Right
          </SplitLayout.RightComponents>
        </SplitLayout>
      </App>
    )
  }
}