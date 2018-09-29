import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {NodeHead} from "./components/nodeHead";
import {TopicListByNode} from "../topic/topicListByNode";


export default class NodeItem extends Component {
  render() {
    return (
      <div style={{marginBottom: "20px"}}>
        <NodeHead nodeName={this.props.nodeName}/>
        <TopicListByNode nodeName={this.props.nodeName}/>
      </div>
    )
  }
}

NodeItem.propTypes = {
  nodeName: PropTypes.string.isRequired
};