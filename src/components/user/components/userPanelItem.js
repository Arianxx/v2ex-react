import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './user.css';


export class UserPanelItem extends Component {
  render() {
    return (
      <table className='userPanel'>
        <tr>
          <td className='userImgCol text-center'>
            <img
              width={64}
              height={64}
              src={this.props.user.avatar_large}
              className='userAvatar'
              alt='usre avatar'
            />
          </td>
          <td className='userPanelDivider'>{null}</td>
          <td className='userInfo'>
            <h3 className='username'>{this.props.user.username}</h3>
            <p className='userBio'>{this.props.user.bio}</p>
            <div className='userLinks'>
              {
                this.props.user.website ? (
                  <span>website: <a href={this.props.user.website}
                                    className='userLink'>{this.props.user.website}</a></span>
                ) : ""
              }
              {
                this.props.user.github ? (
                  <span>github: <a href={this.props.user.github}
                                   className='userLink'>{this.props.user.github}</a></span>
                ) : ""
              }
              {
                this.props.user.twitter ? (
                  <span>twitter: <a href={this.props.user.twitter}
                                    className='userLink'>{this.props.user.twitter}</a></span>
                ) : ""
              }
            </div>
            <span className='userId'>V2EX第 {this.props.user.id} 位用户</span>
            <span className='userJoin'>加入于 {new Date(this.props.user.created * 1000).toLocaleString()}</span>
            <div className='userTagline'>
              {this.props.user.tagline}
            </div>
          </td>
        </tr>
      </table>
    )
  }
}

UserPanelItem.propTypes = {
  user: PropTypes.object.isRequired
};