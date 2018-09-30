import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import './node.css';


export class AllNodesItem extends Component {
  getNodeButtons() {
    return this.props.nodes.map(n => (
      <Link to={`/node/${n.name}`} className='nodeLink'>
        <Button variant='light' className='nodeButton'>
          {n.title}
        </Button>
      </Link>
    ))
  }

  render() {
    return (
      <ListGroup className='allNodes'>
        <ListGroupItem className='allNodeHead'>
          <p className='allNodeTitle'>全部节点</p>
        </ListGroupItem>
        <ListGroupItem className='allNodeBody'>
          {
            this.getNodeButtons()
          }
        </ListGroupItem>
        <ListGroupItem className='text-center'>
          <Button onClick={this.props.putNodes} disables={!this.props.more} className='moreButton'>查看更多</Button>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

AllNodesItem.propTypes = {
  nodes: PropTypes.array.isRequired,
  putNodes: PropTypes.func.isRequired,
  more: PropTypes.bool.isRequired,
};