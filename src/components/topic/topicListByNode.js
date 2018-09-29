import React from 'react';

import {NormalTopicList} from "./components/normalTopics";

import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";

export class TopicListByNode extends NormalTopicList {
  constructor(props) {
    super(props);
    this.state['nodeName'] = props.nodeName;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nodeName: nextProps.nodeName
    });

    super.componentWillReceiveProps(nextProps);
  }

  fetchTopics = () => {
    this.store.dispatch(nodeActions.getNodeTopicsByName(this, {node_name: this.state.nodeName}));
  };

  getTopics = () => {
    return getNodeTopicsByName(this.store.getState(), this.state.nodeName);
  };
}
