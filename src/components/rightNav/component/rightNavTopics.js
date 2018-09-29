import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './rightNav.css';


export class RightNavTopics extends Component {
  getTopics() {
    return this.props.topics.map(t => (
      <Link to={`/topic/${t.id}`} className='rightNavLink'>
        <ListGroupItem variant="light">
          {t.title}
        </ListGroupItem>
      </Link>
    ))
  }

  render() {
    return (
      <div className='rightNavTopic rightNavBox'>
        <ListGroup className='rightNavBody'>
          <ListGroupItem className='rightNavHead'>
            <p className='rightNavTitle'>{this.props.title}</p>
          </ListGroupItem>
          {
            this.getTopics()
          }
        </ListGroup>
      </div>
    )
  }
}

RightNavTopics.propTypes = {
  title: PropTypes.string.isRequired,
  topics: PropTypes.array.isRequired
};