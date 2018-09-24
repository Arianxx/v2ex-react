import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';


class LeftComponents extends Component {
  render() {
    return (
      <Col {...this.props.grid}>
        {
          this.props.children
        }
      </Col>
    )
  }
}

LeftComponents.propTypes = {
  grid: PropTypes.object
};

LeftComponents.defaultProps = {
  grid: {
    xs: 12,
    md: 8
  }
};


class RightComponents extends Component {
  render() {
    return (
      <Col {...this.props.grid}>
        {
          this.props.children
        }
      </Col>
    )
  }
}

RightComponents.propTypes = {
  gird: PropTypes.object
};

RightComponents.defaultProps = {
  grid: {
    xs: 12,
    md: 4
  }
};


class SplitLayout extends Component {
  render() {
    return (
      <Row>
        {this.props.children}
      </Row>
    )
  }
}

SplitLayout.LeftComponents = LeftComponents;
SplitLayout.RightComponents = RightComponents;

export default SplitLayout;