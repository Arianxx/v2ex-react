import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Badge} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {phpTimeToNow} from '../../../utils/format';

import './reply.css';


export default class ReplyItem extends PureComponent {
  render() {
    return (
      <div className='replyItem'>
        <table className='replyItemTable'>
          <tr>
            <td className='replyImgCol'>
              <img
                width={64}
                height={64}
                src={this.props.reply.member.avatar_mini}
                alt="Reply creator's avatar"
              />
            </td>
            <td className='replyDivider'>{null}</td>
            <td className='replyBody'>
              <p className='replyTitle'>
                <Link to={`/user/${this.props.reply.member.username}`} style={{color: "grey"}}>
                  <span className='replyUsername'>
                    {this.props.reply.member.username}
                  </span>
                </Link>
                <span className='replyCreated'>
                {phpTimeToNow(this.props.reply.created)}
              </span>
              </p>
              <p className='replyBody' dangerouslySetInnerHTML={{__html: this.props.reply.content_rendered}}>
              </p>
            </td>
            <td className='replyNum'>
              <Badge pill variant='secondary' className='replyNumBadge' pullRight>
                {this.props.floor}
              </Badge>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

ReplyItem.propTypes = {
  reply: PropTypes.object.isRequired,
  floor: PropTypes.number
};