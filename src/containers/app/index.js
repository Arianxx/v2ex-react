import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Header from '../../components/header';
import Footer from '../../components/footer';
import {PageLoading} from '../../components/loading';
import {actions as appActions} from '../../redux/modules/app';

import './base.css';


class _App extends Component {
  componentDidMount() {
    this.props.loadingEnd();
  }

  render() {
    return (
      <div>
        <PageLoading>
          <Header/>
          <div className='container-fluid'>
            {this.props.children}
          </div>
          <Footer/>
        </PageLoading>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  loadingEnd: bindActionCreators(appActions.endPageLoading, dispatch)
});

export default connect(() => null, mapDispatchToProps)(_App);

