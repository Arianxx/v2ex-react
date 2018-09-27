import React from 'react';

import TopicPreviewItem from './topicPreviewItem';
import {FetchInterface} from "../../loading/fetchInterface";
import {TopicList} from "./topicList";

export class NormalTopicList extends FetchInterface {
  constructor(props) {
    super(props);
    this.topics = [];
  }

  fetchRemoteData = () => {
    this.fetchTopics();
  };

  getTopicPreviews() {
    const topics = this.topics;
    return topics.map(t => (
      <TopicPreviewItem topic={t} member={t.member} node={t.node}/>
    ))
  }

  fetchTopics = () => {
    throw new Error('Not Implement.');
  };

  getTopics = () => {
    throw new Error('Not Implement.');
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topics = this.getTopics(this.store.getState());
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
