import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TopicPreviewItem from './components/topicPreviewItem';
import {FetchInterface} from "../loading/fetchInterface";
import {TopicList} from "./components/topicList";

import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";

class _TopicListByNode extends FetchInterface {
  constructor(props) {
    super(props);
    this.topics = {};
    this.state['nodeName'] = props.nodeName;
  }

  fetchRemoteData = () => {
    this.props.fetchTopics(this, {node_name: this.state.nodeName});
  };

  getTopicPreviews() {
    const topics = this.topics;
    return Object.keys(topics).map(id => (
      <TopicPreviewItem topic={topics[id]} member={topics[id].member} node={topics[id].node}/>))
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topics = getNodeTopicsByName(this.store.getState(), this.state.nodeName) || {};
      return (
        <TopicList>
          {
            this.getTopicPreviews() || []
          }
        </TopicList>
      )
    }

    return super.render();
  }
}


_TopicListByNode.propTypes = {
  nodeName: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fetchTopics: bindActionCreators(nodeActions.getNodeTopicsByName, dispatch),
});

export const TopicListByNode = connect(null, mapDispatchToProps, null, {pure: false})(_TopicListByNode);
