import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../../components/header';
import Footer from '../../components/footer';
import {PageLoading} from '../../components/loading/pageLoading';
import ErrorBoundary from '../../components/error';
import {actions as appActions} from '../../redux/modules/app';

import './base.css';


class _App extends PureComponent {
  componentDidMount() {
    this.props.loadingEnd();
  }

  render() {
    return (
      <PageLoading>
        <Header/>
        <ErrorBoundary>
          <Grid>
            <Row>
              <Col xs={1}/>
              <Col xs={10}>
                {this.props.children}
              </Col>
              <Col xs={1}/>
            </Row>
          </Grid>
        </ErrorBoundary>
        <Footer/>
      </PageLoading>
    )
  }
}

_App.propTypes = {
  loadingEnd: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loadingEnd: bindActionCreators(appActions.endPageLoading, dispatch)
});

export default connect(null, mapDispatchToProps)(_App);

