import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {phpTimeToNow} from "../../../utils/format";

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
              <Link to={`/user/${this.props.member.username}`}>
                <img
                  width={64}
                  height={64}
                  src={this.props.member.avatar_mini}
                  alt="Topic creator's avatar"
                />
              </Link>
            </td>
            <td className='topicDivider'>{null}</td>
            <td className='topicPreviewBody'>
              <Link to={`/topic/${this.props.topic.id}`}>
                <h5 className='topicTitle'><a href='#' className='topicTitleLink'>{this.props.topic.title}</a></h5>
              </Link>
              <Link to={`/node/${this.props.node.name}`}>
                <span className='topicNode'>{this.props.node.title}</span>
              </Link>
              <DotDivider/>

              <Link to={`/user/${this.props.member.username}`} style={{color: "grey"}}>
                <strong><span className='topicMemberName'>{this.props.member.username}</span></strong>
              </Link>
              <DotDivider/>

              <span className='topicTime'>{phpTimeToNow(this.props.topic.created)}</span>
              <DotDivider/>

              <span className='topicLastReplyPrompt'>最后回复来自</span>
              <Link to={`/user/${this.props.topic.last_reply_by}`} style={{color: "grey"}}>
                <span className='topicLastReply'>{this.props.topic.last_reply_by}</span>
              </Link>

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