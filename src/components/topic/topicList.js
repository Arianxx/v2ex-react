import React, {PureComponent} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import TopicPreviewItem from './topicPreviewItem';
import {BlockLoading} from "../loading/blockLoading";

import {actions as nodeActions, getNodeTopicsByName} from "../../redux/modules/node";


export class TopicList extends PureComponent {
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
    this.state = {
      nodeName: props.nodeName,
      loading: true,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      nodeName: nextProps.nodeName,
      loading: true,
    })
  }

  componentDidMount() {
    this.fetchRemoteData();
  }

  componentDidUpdate() {
    this.fetchRemoteData();
  }

  fetchRemoteData() {
    this.state.loading ? this.props.fetchTopics(this, {node_name: this.state.nodeName}) : null;
  }

  getTopicPreviews() {
    const topics = this.topics;
    return Object.keys(topics).map(id => (
      <TopicPreviewItem topic={topics[id]} member={topics[id].member} node={topics[id].node}/>))
  }

  render() {
    if (!this.state.loading) {
      this.topics = getNodeTopicsByName(this.props.getState(), this.state.nodeName);
    }

    return this.state.loading ? (<BlockLoading/>) :
      (<TopicList>
        {
          this.getTopicPreviews()
        }
      </TopicList>)
  }
}

_TopicListByNode.propTypes = {
  nodeName: PropTypes.string.isRequired,
  fetchTopics: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchTopics: bindActionCreators(nodeActions.getNodeTopicsByName, dispatch)
});

export const TopicListByNode = connect(null, mapDispatchToProps)(_TopicListByNode);
