import React from 'react';

import {RightNavFetch} from "./component/rightNavFetch";
import {RightNavTopics} from "./component/rightNavTopics";

import {actions as topicActions, getLatestTopics} from "../../redux/modules/topic";


export default class RightNavNewestTopics extends RightNavFetch {
  hadData = () => {
    return this.topics && this.topics.length > 0;
  };

  rightNavFetch = () => {
    this.store.dispatch(topicActions.getLatestTopics(this));
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topics = !this.hadData() ? getLatestTopics(this.store.getState()) : this.topics;

      return (
        <RightNavTopics title={"近期主题"} topics={this.topics.slice(0, 6)}/>
      )
    }

    return super.render();
  }
}