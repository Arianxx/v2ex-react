import React, {PureComponent} from 'react';

import './loading.css';


export class BlockLoading extends PureComponent {
  render() {
    return (
      <div className='blockLoadingWrapper'>
        <div className='blockLoadingContainer loader'>
          <div className='dot'>{null}</div>
          <div className='dot'>{null}</div>
          <div className='dot'>{null}</div>
          <div className='dot'>{null}</div>
          <div className='dot'>{null}</div>
        </div>
      </div>
    )
  }
}

export default BlockLoading;