import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPageLoadingState} from "../../redux/modules/app";


class _PageLoading extends Component {
  state = {
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      loading: nextProps.loading
    });
  }

  componentDidMount() {
    this.loadingDom = document.getElementById('page_loading');
  }

  componentDidUpdate() {
    if (this.state.loading) {
      document.body.append(this.loadingDom);
    } else {
      this.loadingDom.remove();
    }
  }

  render() {
    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: getPageLoadingState(state)
  };
};

export const PageLoading = connect(mapStateToProps)(_PageLoading);

