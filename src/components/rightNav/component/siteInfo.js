import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './rightNav.css';


export class SiteInfo extends Component {
  render() {
    return (
      <div className='rightNavBox'>
        <ListGroup className='rightNavBody'>
          <ListGroupItem className='rightNavHead'>
            <p className='rightNavTitle'>V2EX网站信息</p>
          </ListGroupItem>
          <ListGroupItem variant='light'>
            主题数量: <strong>{this.props.topicMax}</strong>
          </ListGroupItem>
          <ListGroupItem variant='light'>
            注册会员: <strong>{this.props.memberMax}</strong>
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}

SiteInfo.propTypes = {
  topicMax: PropTypes.number.isRequired,
  memberMax: PropTypes.number.isRequired
};