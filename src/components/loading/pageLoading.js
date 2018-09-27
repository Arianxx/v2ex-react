import React, {Component, PureComponent} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {getPageLoadingState} from "../../redux/modules/app";
import {Timeout} from "./components/loadingTimeout";
import {actions as appActions} from "../../redux/modules/app";

import './components/loading.css';


const TIME_OUT = 5;

class PageLoadingShade extends PureComponent {
  state = {
    minHeight: document.body.clientHeight
  };

  onWindowResize = () => {
    this.setState({
      minHeight: document.body.clientHeight
    })
  };

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  render() {
    return (
      <div className='pageLoadingShade' style={{minHeight: this.state.minHeight}}>{null}</div>
    )
  }
}


class _PageLoading extends Component {
  constructor(props) {
    super(props);
    this.time = 0;
    this.increaseTimeFunc = [];
    this.state = {
      loading: this.props.loading,
      loadingTimeout: false
    };
    if (this.state.loading) {
      this.startIncreaseTime()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.loading,
      loadingTimeout: false
    });
  }

  componentDidMount() {
    this.loadingDom = document.getElementById('page_loading');
  }

  componentWillUnmount() {
    this.clearIncreaseTime();
    this.props.startPageLoading();
    if (!document.getElementById('page_loading')) {
      document.body.append(this.loadingDom);
    }
  }

  componentDidUpdate() {
    if (this.state.loading) {
      document.body.append(this.loadingDom);
      this.startIncreaseTime();
    } else {
      this.loadingDom.remove();
      this.clearIncreaseTime();
      this.time = 0;
    }
  }

  startIncreaseTime() {
    this.increaseTimeFunc.push(setInterval(() => {
      this.time += 1;
      if (this.time > TIME_OUT) {
        this.handleLoadingTimeout();
      }
    }, 1000));
  }

  clearIncreaseTime() {
    this.increaseTimeFunc.map(f => window.clearInterval(f));
    this.increaseTimeFunc = [];
  }

  handleLoadingTimeout() {
    this.setState({
      loading: false,
      loadingTimeout: true
    });
  }

  // 箭头函数传给子组件仍能保存this，class直接定义的函数不可以
  handleTimeoutRefresh = () => {
    this.props.endPageLoading();
    this.props.history.push(this.props.history.location.pathname);
    // todo:存在一个问题，子组件发出的fetch请求可能并非失败，而是延迟返回
  };

  render() {
    if (this.state.loading) {
      return (<PageLoadingShade/>);
    }
    else if (this.state.loadingTimeout) {
      return (
        <div>
          <PageLoadingShade/>
          <Timeout handleButtonClick={this.handleTimeoutRefresh}/>
        </div>
      );
    }
    else {
      return (<div>{null}</div>);
    }
  }
}

_PageLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  startPageLoading: PropTypes.func.isRequired,
  endPageLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getPageLoadingState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  startPageLoading: bindActionCreators(appActions.startPageLoading, dispatch),
  endPageLoading: bindActionCreators(appActions.endPageLoading, dispatch),
});

export const PageLoading = withRouter(connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(_PageLoading));

