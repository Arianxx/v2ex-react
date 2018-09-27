import React, {PureComponent} from 'react';
import {Jumbotron, Button, ProgressBar} from 'react-bootstrap';

import './loading.css';


export class Timeout extends PureComponent {
  render() {
    return (
      <Jumbotron className='timeout_prompt text-center'>
        <ProgressBar active now={100} className='timeout_progress'/>
        <div className='timeout_container'>
          <h3>网络存在拥塞</h3>
          <p>
            没有在预定的时间内收到应有的响应，可能仍需要一些时间。
          </p>
          <p>
            不过，你可以尝试立即
            <Button bsStyle='info' className='timeout_update' onClick={this.props.handleButtonClick}>
              重新加载
            </Button>
            。
          </p>
        </div>
      </Jumbotron>
    )
  }
}