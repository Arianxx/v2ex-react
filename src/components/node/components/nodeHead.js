import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {NodeHeadItem} from "./nodeHeadItem";
import {FetchInterface} from "../../loading/fetchInterface";
import {actions as nodeActions, getNodeInfoByName} from "../../../redux/modules/node";

import './node.css';

export class _NodeHead extends FetchInterface {
  constructor(props) {
    super(props);
    this.node = {};
    this.state['name'] = props.nodeName;
  }

  fetchRemoteData = () => {
    this.props.getNodeInfo(this, {name: this.state.name})
  };

  getNode() {
    return (<NodeHeadItem node={this.node}/>);
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.node = getNodeInfoByName(this.store.getState(), this.state.name)

      return this.getNode();
    }

    return super.render();
  }
}

_NodeHead.propTypes = {
  nodeName: PropTypes.string.isRequired,
  getNodeInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getNodeInfo: bindActionCreators(nodeActions.getNodeInfoByName, dispatch),
});

export const NodeHead = connect(null, mapDispatchToProps, null, {pure: false})(_NodeHead);