import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {UserPanel} from "./components/userPanel";
import {UserTopics} from "../topic/topicListByUser";

import './components/user.css';


export class UserProfile extends Component {
  render() {
    return (
      <div className='userProfile' style={{marginBottom: "20px"}}>
        <div className='userProfileHead'>
          <UserPanel username={this.props.username}/>
        </div>
        <div className='userProfileTopic'>
          <div className='userProfileTopicHeader text-center'>
            {this.props.username} 创建的主题
          </div>
          <div className='userProfileTopicBody'>
            <UserTopics username={this.props.username}/>
          </div>
        </div>
      </div>
    )
  }
}

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
};