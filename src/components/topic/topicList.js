import React, {Component, PureComponent} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TopicPreviewItem from './topicPreviewItem';
import {FetchInterface} from "../loading/fetchInterface";

import {store} from "../../redux/store";
import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";


export class TopicList extends Component {
  render() {
    return (
      <ListGroup>
        {
          this.props.children.map ? this.props.children.map(c => (
              <ListGroupItem style={{padding: 0}}>{c}</ListGroupItem>
            ))
            : <ListGroupItem style={{padding: 0}}>{this.props.children}</ListGroupItem>
        }
      </ListGroup>
    )
  }
}


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
      this.topics = getNodeTopicsByName(store.getState(), this.state.nodeName) || {};
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
