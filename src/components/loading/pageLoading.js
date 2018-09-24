import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPageLoadingState} from "../../redux/modules/app";


class _PageLoading extends PureComponent {
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
    return this.state.loading ? '' : this.props.children;
  }
}

_PageLoading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    loading: getPageLoadingState(state)
  };
};

export const PageLoading = connect(mapStateToProps)(_PageLoading);

