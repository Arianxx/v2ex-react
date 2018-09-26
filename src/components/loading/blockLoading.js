import React, {PureComponent} from 'react';

import './loading.css';


// todo: 将加载相关的逻辑封装到这个组件里面，而不用到各子组件里面分别单独写
// 主要需要三个信息：
// 一:怎样获取数据
// 二:怎样拿取数据
// 三:拿取数据后怎样渲染
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