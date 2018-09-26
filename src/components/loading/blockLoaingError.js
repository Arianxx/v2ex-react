import React, {PureComponent} from 'react';
import {Button, Jumbotron} from 'react-bootstrap';
import PropTypes from 'prop-types';

import './loading.css';


export class BlockLoadingError extends PureComponent {
  render() {
    return (
      <Jumbotron className='blockLoadingError'>
        <div className='blockLoadingErrorPrompt text-center'>
          <p>Oops! 请求出错。</p>
          <p>
            <small>错误消息: {String(this.props.error)} </small>
          </p>
          <p><Button bsStyle="info" onClick={this.props.fetchRemoteData}>重试</Button></p>
        </div>
      </Jumbotron>
    )
  }
}

BlockLoadingError.propTypes = {
  fetchRemoteData: PropTypes.func.isRequired,
  error: PropTypes.string
};