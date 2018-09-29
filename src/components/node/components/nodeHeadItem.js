import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
            <td className='nodeHeadBody' style={{paddingRight: "10px"}}>
              <div className='nodeHeadNav'>
                <Link to='/'>
                  <a className='nodeHeadNavLink'><span>V2EX</span></a>
                </Link>
                <span className='nodeHeadNavDivider'>{">"}</span>
                <Link to={`/node/${this.props.node.name}`} style={{color: "grey"}}>
                  <span>{this.props.node.title}</span>
                </Link>
              </div>
              <div className='nodeHeader' dangerouslySetInnerHTML={{__html: this.props.node.header}}>
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