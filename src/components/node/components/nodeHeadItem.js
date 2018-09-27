import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './node.css';


export class NodeHeadItem extends Component {
  render() {
    return (
      <div className='nodeHeadBox'>
        <table className='nodeHeadTable'>
          <tr>
            <td className='nodeImgCol'>
              <img
                width={64}
                height={64}
                src={this.props.node.avatar_large}
                alt='node avatar'
                className='nodeHeadImage'
              />
            </td>
            <td className='nodeHeadDivider'>{null}</td>
            <td className='nodeHeadBody'>
              <div className='nodeHeadNav'>
                <a className='nodeHeadNavLink'><span>V2EX</span></a>
                <span className='nodeHeadNavDivider'>{">"}</span>
                <span>{this.props.node.title}</span>
              </div>
              <div className='nodeHeader'>
                {this.props.node.header}
              </div>
            </td>
            <td className='nodeHeadInfo'>
              <p className='nodeHeadCollectionNum'>总收藏数 {this.props.node.stars}</p>
              <p className='nodeHeadTopicsNum'>总主题数 {this.props.node.topics}</p>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

NodeHeadItem.propTypes = {
  node: PropTypes.object.isRequired
};