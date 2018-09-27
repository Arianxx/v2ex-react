import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TopicPreviewItem from './components/topicPreviewItem';
import {FetchInterface} from "../loading/fetchInterface";
import {TopicList} from "./components/topicList";

import {actions as topicActions, getLatestTopics} from "../../redux/modules/topic";


class _NewestTopicList extends FetchInterface {
  constructor(props) {
    super(props);
    this.topics = [];
  }

  fetchRemoteData = () => {
    this.props.getLatestTopics(this);
  };

  getTopicPreviews() {
    const topics = this.topics;
    return topics.map(t => (
      <TopicPreviewItem topic={t} member={t.member} node={t.node}/>
    ))
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topics = getLatestTopics(this.store.getState());
      return (
        <TopicList>
          {
            this.getTopicPreviews() || []
          }
        </TopicList>
      )
    }

    return super.render()
  }
}

_NewestTopicList.propTypes = {
  getLatestTopics: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getLatestTopics: bindActionCreators(topicActions.getLatestTopics, dispatch)
});

export const NewestTopicList = connect(null, mapDispatchToProps, null, {pure: false})(_NewestTopicList);