import React, {Component} from 'react';
import propTypes from 'prop-types';

import {TopicContent} from "./topicContent";
import {ReplyList} from "../reply/replyList";


export class TopicItem extends Component {
  render() {
    return (
      <div>
        <TopicContent topicId={this.props.id}/>
        <ReplyList topicId={this.props.id}/>
      </div>
    )
  }
}

TopicItem.propTypes = {
  id: propTypes.number.isRequired
};