import React from 'react';

import {store} from "../../redux/store";
import {NormalTopicList} from "./components/normalTopics";

import {actions as topicActions, getHotTopics} from "../../redux/modules/topic";


export class HotTopicList extends NormalTopicList {
  fetchTopics = () => {
    store.dispatch(topicActions.getHotTopics(this));
  };

  getTopics = () => {
    return getHotTopics(store.getState());
  }
}