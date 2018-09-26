import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {BlockLoading} from "../loading/blockLoading";
import {BlockLoadingError} from "../loading/blockLoaingError";
import ReplyItem from './replyItem';

import {store} from "../../redux/store";
import {actions as replyActions, getReplies} from "../../redux/modules/reply";
import {actions as appActions} from "../../redux/modules/app";


class _ReplyList extends Component {
  constructor(props) {
    super(props);
    this.replies = [];
    this.state = {
      topicId: props.topicId,
      loading: true,
      error: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      topicId: nextProps.topicId,
      loading: true,
      error: false
    });

    this.fetchRemoteData();
    this.props.pageLoadingEnd();
  }

  componentDidMount() {
    this.fetchRemoteData();
    this.props.pageLoadingEnd();
  }

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

  fetchRemoteData = () => {
    this.props.getTopicReplies(this, {topic_id: this.props.topicId});
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      this.replies = getReplies(store.getState(), this.state.topicId) || [];
    }

    if (this.state.loading) {
      return (<BlockLoading/>);
    }
    else if (this.state.error) {
      return (<BlockLoadingError fetchRemoteData={this.fetchRemoteData} error={this.state.error}/>)
    }
    else {
      return (
        <ListGroup>
          {
            this.getRepliesComponents()
          }
        </ListGroup>
      )
    }
  }
}

_ReplyList.propTypes = {
  topicId: PropTypes.number.isRequired,
  getTopicReplies: PropTypes.func.isRequired,
  pageLoadingEnd: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getTopicReplies: bindActionCreators(replyActions.getTopicReplies, dispatch),
  pageLoadingEnd: bindActionCreators(appActions.endPageLoading, dispatch),
});

export const ReplyList = connect(null, mapDispatchToProps, null, {pure: false})(_ReplyList);