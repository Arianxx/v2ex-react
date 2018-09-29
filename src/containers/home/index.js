import React, {Component} from 'react';

import App from '../app/index';
import SplitLayout from '../../components/layout/split';
import {NodeNav} from "./components/nav";

import navJson from './components/nav.json';


export default class Index extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <NodeNav navJson={navJson}/>
          </SplitLayout.LeftComponents>
          <SplitLayout.RightComponents>
            右侧栏
          </SplitLayout.RightComponents>
        </SplitLayout>
      </App>
    )
  }
}