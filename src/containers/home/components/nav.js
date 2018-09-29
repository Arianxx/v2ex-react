import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import PropTypes from 'prop-types';

import {SubNode} from "./subNav";

import './nav.css';


export class NodeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: props.navJson.nav[0].name
    }
  }

  getTabs() {
    return this.props.navJson.nav.map(n => {
      return (
        <Tab eventKey={n.name} title={n.title}>
          {
            this.state.key === n.name ?
              <SubNode nodes={n.subNode}/> :
              ""
          }
        </Tab>
      )
    })
  }

  render() {
    return (
      <Tabs
        activeKey={this.state.key}
        onSelect={key => this.setState({key})}
        style={{marginBottom: "20px"}}
      >
        {
          this.getTabs()
        }
      </Tabs>
    )
  }
}

NodeNav.propTypes = {
  navJson: PropTypes.object.isRequired
};