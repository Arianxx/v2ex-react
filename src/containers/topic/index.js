import React, {Component} from 'react';

import {TopicItem} from "../../components/topic/topicItem";


export default class Topic extends Component {
  render() {
    return (
      <TopicItem id={this.props.match.params.id}/>
    )
  }
}