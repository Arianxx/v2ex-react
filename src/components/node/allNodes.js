import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {AllNodesItem} from "./components/allNodes";
import {FetchInterface} from "../loading/fetchInterface";

import {actions as nodeActions, getAllNodes} from "../../redux/modules/node";


const PAGE_SIZE = 50;

class _AllNode extends FetchInterface {
  constructor(props) {
    super(props);
    this.nodes = [];
    this.state['showed'] = null;
  }

  fetchRemoteData = () => {
    if (!getAllNodes(this.store.getState()).length) {
      this.props.fetchAllNodes(this);
    }
    else {
      this.setState({
        loading: false,
        error: false
      })
    }
  };

  componentDidUpdate() {
    super.componentDidUpdate();
    if (this.state.showed === null) {
      this.nodes = getAllNodes(this.store.getState());
      this.putNodes();
    }
  }

  putNodes = () => {
    const showed = [...this.state.showed || []];
    const nodes = this.nodes || [];
    for (let index = 0; index < PAGE_SIZE && nodes.length > 0; index++) {
      showed.push(this.nodes.pop());
    }
    this.setState({
      showed: showed.length === 0 ? null : showed
    })
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      return (
        <AllNodesItem nodes={this.state.showed || []} more={this.nodes.length > 0} putNodes={this.putNodes}/>
      )
    }

    return super.render();
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAllNodes: bindActionCreators(nodeActions.getAllNodes, dispatch)
});

export const AllNode = connect(null, mapDispatchToProps, null, {pure: false})(_AllNode);