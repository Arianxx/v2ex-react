import React, {Component} from 'react';

import {NewestTopicList} from "../../components/topic/newestTopicsList";

import './topicList.css';


export class NewestTopics extends Component {
  render() {
    return (
      <div>
        <div className='topicsHeaderBox'>
          <p className='topicsHeader'>
            最新主题
          </p>
        </div>
        <NewestTopicList/>
      </div>
    )
  }
}