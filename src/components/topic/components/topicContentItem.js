import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import {phpTimeToNow} from "../../../utils/format";
import './topicContentItem.css';


export class TopicContentItem extends Component {
  render() {
    return (
      <div className='topicBox'>
        <div className='fr'>
          <a href='#'>
            <img className='memberAvatar' src={this.props.topic.member.avatar_large} border="0" align="default"/>
          </a>
        </div>
        <div className='topicNodeInfo'>
          <Link to='/'>
            <a className='topicNodeInfoName'>V2EX</a>
          </Link>
          <span className='topicNodeInfoDivider'>{">"}</span>
          <Link to={`/node/${this.props.topic.node.name}`}>
            <a className='topicNodeInfoName'>{this.props.topic.node.title}</a>
          </Link>
        </div>
        <h3 className='topicContentTitle'>{this.props.topic.title}</h3>
        <small className='topicInfo'>
          <Link to={`/user/${this.props.topic.member.username}`} style={{color: 'grey'}}>
          <span className='topicUsername'>
            {this.props.topic.member.username}
          </span>
          </Link>
          <span className='topicCreated'>
            {phpTimeToNow(this.props.topic.created)}
          </span>
        </small>
        <hr className='topicContentDivider'/>
        <div className='topicContent'>
          <p dangerouslySetInnerHTML={{__html: this.props.topic.content_rendered}}>
          </p>
        </div>
      </div>
    )
  }
}

TopicContentItem.propTypes = {
  topic: PropTypes.object.isRequired,
};

