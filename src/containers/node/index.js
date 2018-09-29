import React, {Component} from 'react';

import NodeItem from '../../components/node';


export default class Node extends Component {
  render() {
    return (
      <NodeItem nodeName={this.props.match.params.name}/>
    )
  }
}