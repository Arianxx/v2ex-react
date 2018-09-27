import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import ReplyItem from './components/replyItem';
import {FetchInterface} from "../loading/fetchInterface";

import {actions as replyActions, getReplies} from "../../redux/modules/reply";


class _ReplyList extends FetchInterface {
  constructor(props) {
    super(props);
    this.replies = [];
    this.state['topicId'] = props.topicId;
  }

  fetchRemoteData = () => {
    this.props.getTopicReplies(this, {topic_id: this.props.topicId});
  };

  getRepliesComponents() {
    const replies = this.replies;
    let index = 0;
    return replies.map(r => {
      index += 1;
      return (
        <ListGroupItem style={{padding: 0}}>
          <ReplyItem reply={r} floor={index}/>
        </ListGroupItem>
      )
    })
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.replies = getReplies(this.store.getState(), this.state.topicId) || [];
      return (
        <ListGroup style={{marginTop: '10px', borderBottom: "1px solid lightgrey"}}>
          {
            this.getRepliesComponents() || []
          }
        </ListGroup>
      )
    }

    return super.render();
  }
}

_ReplyList.propTypes = {
  topicId: PropTypes.number.isRequired,
  getTopicReplies: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getTopicReplies: bindActionCreators(replyActions.getTopicReplies, dispatch),
});

export const ReplyList = connect(null, mapDispatchToProps, null, {pure: false})(_ReplyList);