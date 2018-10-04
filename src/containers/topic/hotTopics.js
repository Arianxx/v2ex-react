import React, {Component} from 'react';

import {HotTopicList} from "../../components/topic/hotTopicList";

import './topicList.css';


export class HotTopics extends Component {
  render() {
    return (
      <div>
        <div className='topicsHeaderBox'>
          <p className='topicsHeader'>
            最热主题
          </p>
        </div>
        <HotTopicList/>
      </div>
    )
  }
}