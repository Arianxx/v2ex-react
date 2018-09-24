import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';


const generateRows = (components) => {
  return components.map ? components.map(c => (
    <Row>
      {c}
    </Row>
  )) : (
    <Row>
      {components}
    </Row>
  )
};


class LeftComponents extends Component {
  render() {
    return (
      <Col {...this.props.grid}>
        {
          generateRows(this.props.children)
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
    md: 9
  }
};


class RightComponents extends Component {
  render() {
    return (
      <Col {...this.props.grid}>
        {
          generateRows(this.props.children)
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
    md: 3
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