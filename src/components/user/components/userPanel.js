import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';

import {UserPanelItem} from "./userPanelItem";
import {FetchInterface} from "../../loading/fetchInterface";
import {actions as userActions, getMemberInfo} from "../../../redux/modules/user";


export class _UserPanel extends FetchInterface {
  constructor(props) {
    super(props);
    this.user = {};
    this.state['username'] = props.username;
  }

  fetchRemoteData = () => {
    this.props.getInfo(this, {username: this.state.username});
  };

  getPanel() {
    return (<UserPanelItem user={this.user}/>);
  }

  render() {
    if (!this.state.loading && !this.state.error) {
      this.user = getMemberInfo(this.store.getState());

      return this.getPanel();
    }

    return super.render();
  }
}

_UserPanel.propTypes = {
  username: PropTypes.string.isRequired,
  getInfo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getInfo: bindActionCreators(userActions.getMemberInfo, dispatch),
});

export const UserPanel = connect(null, mapDispatchToProps, null, {pure: false})(_UserPanel);