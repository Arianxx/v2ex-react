import React, {PureComponent} from 'react';
import {Badge} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {phpTimeToNow} from "../../utils/format";

import './topicPreviewItem.css';


const DotDivider = () => (
  <span className='dotDivider'> • </span>
);


export default class TopicPreviewItem extends PureComponent {
  render() {
    return (
      <div className='topicPreview'>
        <table className='topicPreviewTable'>
          <tr>
            <td className='topicImgCol'>
              <img
                width={64}
                height={64}
                src={this.props.member.avatar_mini}
                alt="Topic creator's avatar"
              />
            </td>
            <td className='topicDivider'>{null}</td>
            <td className='topicPreviewBody'>
              <h5 className='topicTitle'><a href='#' className='topicTitleLink'>{this.props.topic.title}</a></h5>
              <span className='topicNode'>{this.props.node.name}</span>
              <DotDivider/>

              <strong><span className='topicMemberName'>{this.props.member.username}</span></strong>
              <DotDivider/>

              <span className='topicTime'>{phpTimeToNow(this.props.topic.created)}</span>
              <DotDivider/>

              <span className='topicLastReplyPrompt'>最后回复来自</span>
              <span className='topicLastReply'>{this.props.topic.last_reply_by}</span>

            </td>
            <td className='topicReplies'>
              <Badge pill variant='secondary' className="topicRepliesNum"
                     pullRight>{this.props.topic.replies}</Badge>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

TopicPreviewItem.propTypes = {
  topic: PropTypes.object.isRequired,
  member: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired
};