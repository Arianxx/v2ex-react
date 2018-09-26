import React, {Component} from 'react';

import App from '../app/index';
import SplitLayout from '../../components/layout/split';
import TopicPreviewItem from '../../components/topic/topicPreviewItem';
import {TopicList, TopicListByNode} from '../../components/topic/topicList';
import ReplyItem from '../../components/reply/replyItem';
import {ReplyList} from '../../components/reply/replyList'

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


export default class Index extends Component {
  render() {
    return (
      <App>
        <SplitLayout>
          <SplitLayout.LeftComponents>
            <TopicList>
              <TopicPreviewItem member={FAKE_TOPIC.member} topic={FAKE_TOPIC.topic} node={FAKE_TOPIC.node}/>
            </TopicList>
            <button onClick={() => store.dispatch(actions.startPageLoading())}>加载</button>
            <TopicListByNode nodeName='python'/>
            <ReplyItem reply={FAKE_REPLY} floor={100}/>
            <ReplyList topicId={1}/>
          </SplitLayout.LeftComponents>
          <SplitLayout.RightComponents>
            Right
          </SplitLayout.RightComponents>
        </SplitLayout>
      </App>
    )
  }
}