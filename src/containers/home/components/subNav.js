import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {TopicListByNode} from "../../../components/topic/topicListByNode";

import './nav.css';


export class SubNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nodes: props.nodes,
      selected: props.nodes[0].name
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nodes: nextProps.nodes,
      selected: nextProps.nodes[0].name
    })
  }

  handelClickLink = (event) => {
    this.setState({
      selected: event.target.getAttribute('data-key')
    });
  };

  getSubNav() {
    return this.state.nodes.map(node => {
      return node.name === this.state.selected ?
        (<a className='nodeNavLink active' data-key={node.name} href='#'
            onClick={this.handelClickLink}>{node.title}</a>) :
        (<a className='nodeNavLink' data-key={node.name} href='#'
            onClick={this.handelClickLink}>{node.title}</a>)
    });
  }

  render() {
    return (
      <div className='subNode'>
        <div className='subNodeNavWrapper'>
          <div className='subNodeNav'>
            {
              this.getSubNav()
            }
          </div>
        </div>
        <TopicListByNode nodeName={this.state.selected}/>
      </div>
    )
  }
}

SubNode.propTypes = {
  nodes: PropTypes.array.isRequired,
};