import React, {Component, PureComponent} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import TopicPreviewItem from './topicPreviewItem';
import {BlockLoading} from "../loading/blockLoading";

import {store} from "../../redux/store";
import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";
import {actions as appActions} from "../../redux/modules/app";


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


class _TopicListByNode extends PureComponent {
  constructor(props) {
    super(props);
    this.topics = {};
    this.state = {
      nodeName: props.nodeName,
      loading: true,
      error: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nodeName: nextProps.nodeName,
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

  fetchRemoteData() {
    this.props.fetchTopics(this, {node_name: this.state.nodeName});
  }

  getTopicPreviews() {
    const topics = this.topics;
    return Object.keys(topics).map(id => (
      <TopicPreviewItem topic={topics[id]} member={topics[id].member} node={topics[id].node}/>))
  }

  render() {
    if (!this.state.loading) {
      this.topics = getNodeTopicsByName(store.getState(), this.state.nodeName) || {};
    }

    // todo: 增加 error 提示组件
    return this.state.error ? "error " : this.state.loading ? (<BlockLoading/>) :
      (<TopicList>
        {
          this.getTopicPreviews()
        }
      </TopicList>)
  }
}

_TopicListByNode.propTypes = {
  nodeName: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func.isRequired,
  pageLoadingEnd: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchTopics: bindActionCreators(nodeActions.getNodeTopicsByName, dispatch),
  pageLoadingEnd: bindActionCreators(appActions.endPageLoading, dispatch),
});

export const TopicListByNode = connect(null, mapDispatchToProps, null, {pure: false})(_TopicListByNode);
