import React from 'react';

import {store} from "../../redux/store";
import {NormalTopicList} from "./components/normalTopics";

import {actions as topicActions, getLatestTopics} from "../../redux/modules/topic";


export class NewestTopicList extends NormalTopicList {
  fetchTopics = () => {
    store.dispatch(topicActions.getLatestTopics(this));
  };

  getTopics = () => {
    return getLatestTopics(store.getState());
  }
}