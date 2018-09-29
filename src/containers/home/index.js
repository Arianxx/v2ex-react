import React, {Component} from 'react';

import App from '../app/index';
import SplitLayout from '../../components/layout/split';
import {NodeHead} from '../../components/node/components/nodeHead';

import {store} from "../../redux/store";
import {actions} from "../../redux/modules/app";


const FAKE_NODE = {
  avatar_large: "//cdn.v2ex.com/navatar/8613/985e/90_large.png?m=1538030606",
  title: "ceshi",
  header: "啊手动阀手动阀",
  stars: 1232,
  topics: 23
};

export default class Index extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <NodeHead nodeName='python'/>
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