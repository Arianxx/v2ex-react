import React, {Component} from 'react';

import SplitLayout from '../../components/layout/split';
import TopicPreview from '../../components/topic/topicPreview';


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


export default class Home extends Component {
  render() {
    return (
      <SplitLayout>
        <SplitLayout.LeftComponents>
          <TopicPreview member={FAKE_TOPIC.member} topic={FAKE_TOPIC.topic} node={FAKE_TOPIC.node}/>
        </SplitLayout.LeftComponents>
        <SplitLayout.RightComponents>
          Right
        </SplitLayout.RightComponents>
      </SplitLayout>
    )
  }
}