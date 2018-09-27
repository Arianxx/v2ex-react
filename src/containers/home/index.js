import React, {Component} from 'react';

import App from '../app/index';
import SplitLayout from '../../components/layout/split';
import {TopicItem} from "../../components/topic/topicItem";
import {TopicContent} from "../../components/topic/topicContent";

import {store} from "../../redux/store";
import {actions} from "../../redux/modules/app";


const FAKE_TOPIC = {
  topic: {
    title: "测试",
    created: 1111111111,
    replies: 10,
    last_reply_by: "no"
  },
  member: {
    avatar_mini: "https://cdn.v2ex.com/avatar/4042/d0c6/14809_normal.png?m=1328281768",
    username: "测试",
  },
  node: {
    name: "测试"
  }
};

const FAKE_REPLY = {
  member: {
    avatar_mini: "https://cdn.v2ex.com/avatar/4042/d0c6/14809_normal.png?m=1328281768",
    username: "mike"
  },
  created: 1111111111,
  content_rendered: 'bakabaka!!'
};

const FAKE_TOPIC_CONTENT = {
  title: '测试',
  created: 101111,
  content_rendered: "asdfasdfas",
  member: {
    avatar_normal: "https://cdn.v2ex.com/avatar/4042/d0c6/14809_normal.png?m=1328281768",
    username: "fasdf",
  },
  node: {
    title: "确认"
  }
};


export default class Index extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <TopicItem id={5}/>
            <button onClick={() => store.dispatch(actions.startPageLoading())}>加载</button>
          </SplitLayout.LeftComponents>
          <SplitLayout.RightComponents>
            Right
          </SplitLayout.RightComponents>
        </SplitLayout>
      </App>
    )
  }
}