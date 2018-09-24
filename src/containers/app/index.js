import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../../components/header';
import Footer from '../../components/footer';
import {PageLoading} from '../../components/loading/pageLoading';
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
        <Grid>
          <Row>
            <Col sm={1} md={2}/>
            <Col sm={10} md={8}>
              {this.props.children}
            </Col>
            <Col sm={1} md={2}/>
          </Row>
        </Grid>
        <Footer/>
      </PageLoading>
    )
  }
}

_App.propTypes = {
  loadingEnd: PropTypes.func.required
};

const mapDispatchToProps = dispatch => ({
  loadingEnd: bindActionCreators(appActions.endPageLoading, dispatch)
});

export default connect(null, mapDispatchToProps)(_App);

