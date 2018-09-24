import React, {PureComponent} from 'react';
import {Jumbotron} from 'react-bootstrap';

import './error.css';


export default class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {hasError: false}
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true});
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Jumbotron className='error_prompt text-center'>
          <div>
            <h2>App内部发生了错误</h2>
            <p>
              请联系管理员并向他扔鸡蛋。由于他的某些不当处理，App内部弹出了致命错误。
            </p>
          </div>
        </Jumbotron>
      )
    }

    return this.props.children;
  }
}