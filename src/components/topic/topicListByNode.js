import React from 'react';

import {store} from "../../redux/store";
import {NormalTopicList} from "./components/normalTopics";

import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";

export class TopicListByNode extends NormalTopicList {
  constructor(props) {
    super(props);
    this.state['nodeName'] = props.nodeName;
  }

  fetchTopics = () => {
    store.dispatch(nodeActions.getNodeTopicsByName(this, {node_name: this.state.nodeName}));
  };

  getTopics = () => {
    return getNodeTopicsByName(store.getState(), this.state.nodeName);
  };
}
