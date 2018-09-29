import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import propTypes from 'prop-types';

import {TopicContentItem} from './topicContentItem';
import {FetchInterface} from "../../loading/fetchInterface";


import {actions as topicActions, getTopicById} from "../../../redux/modules/topic";

class _TopicContent extends FetchInterface {
  constructor(props) {
    super(props);
    this.topic = {};
    this.state['topicId'] = props.topicId;
  }

  fetchRemoteData = () => {
    this.props.getTopicById(this, {id: this.state.topicId});
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      topicId: nextProps.topicId,
    });

    super.componentWillReceiveProps(nextProps);
  }

  getTopic() {
    return (<TopicContentItem topic={this.topic}/>);
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topic = getTopicById(this.store.getState(), this.state.topicId);
      return this.getTopic();
    }

    return super.render();
  }
}

_TopicContent.propTypes = {
  topicId: propTypes.number.isRequired,
  getTopicById: propTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  getTopicById: bindActionCreators(topicActions.getTopicById, dispatch)
});

export const TopicContent = connect(null, mapDispatchToProps, null, {pure: false})(_TopicContent);
