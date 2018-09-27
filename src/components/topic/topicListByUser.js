import React from 'react';
import PropTypes from 'prop-types';

import {store} from "../../redux/store";
import {NormalTopicList} from "./components/normalTopics";

import {actions as userActions, getMemberTopics} from "../../redux/modules/user";

export class UserTopics extends NormalTopicList {
  constructor(props) {
    super(props);
    this.state['username'] = props.username;
  }

  fetchTopics = () => {
    store.dispatch(userActions.getMemberTopic(this, {username: this.state.username}));
  };

  getTopics = () => {
    return getMemberTopics(store.getState());
  };
}

UserTopics.propTypes = {
  username: PropTypes.string.isRequired
};