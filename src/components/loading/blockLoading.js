import React, {Component} from 'react';

import './loading.css';


class BlockLoading extends Component {
  render() {
    return (
      <div className='blockLoadingContainer loader'>
        <div className='dot'>{null}</div>
        <div className='dot'>{null}</div>
        <div className='dot'>{null}</div>
        <div className='dot'>{null}</div>
        <div className='dot'>{null}</div>
      </div>
    )
  }
}

export default BlockLoading;