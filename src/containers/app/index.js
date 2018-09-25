import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from '../../components/header';
import Footer from '../../components/footer';
import {PageLoading} from '../../components/loading/pageLoading';
import ErrorBoundary from '../../components/error';

import './base.css';


export default class App extends Component {
  render() {
    return (
      <div>
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
          <PageLoading/>
        </ErrorBoundary>
        <Footer/>
      </div>
    )
  }
}