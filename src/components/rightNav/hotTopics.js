import React from 'react';

import {RightNavFetch} from "./component/rightNavFetch";
import {RightNavTopics} from "./component/rightNavTopics";

import {actions as topicActions, getHotTopics} from "../../redux/modules/topic";


export default class RightNavHotTopics extends RightNavFetch {
  hadData = () => {
    return this.topics && this.topics.length > 0;
  };

  rightNavFetch = () => {
    this.store.dispatch(topicActions.getHotTopics(this));
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      this.topics = !this.hadData() ? getHotTopics(this.store.getState()) : this.topics;

      return (
        <RightNavTopics title={"热门主题"} topics={this.topics.slice(0, 6)}/>
      )
    }

    return super.render();
  }
}