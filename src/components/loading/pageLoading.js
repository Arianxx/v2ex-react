import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import Header from '../../components/header';
import Footer from '../../components/footer';
import {getPageLoadingState} from "../../redux/modules/app";
import {actions as appActions} from "../../redux/modules/app";


const TIME_OUT = 5;

class _PageLoading extends PureComponent {
  state = {
    loading: true,
    loadingTimeout: false
  };

  constructor(props) {
    super(props);
    this.time = 0;
    this.increaseTimeFunc = [];
    this.startIncreaseTime();
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

  render() {
    if (this.state.loading) {
      return (
        <div>
          <Header/>
          <Footer/>
        </div>
      )
    }
    else if (this.state.loadingTimeout) {
      return (
        <div>
          <Header/>
          Timeout
          <Footer/>
        </div>
      )
    }
    else {
      return this.props.children;
    }
  }
}

_PageLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
  startPageLoading: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loading: getPageLoadingState(state)
  };
};

const mapDispatchToProps = dispatch => ({
  startPageLoading: bindActionCreators(appActions.startPageLoading, dispatch)
});

export const PageLoading = connect(mapStateToProps, mapDispatchToProps)(_PageLoading);

