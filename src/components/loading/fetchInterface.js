import React, {PureComponent} from 'react';

import {store} from "../../redux/store";
import {BlockLoading} from "./blockLoading";
import {BlockLoadingError} from "./blockLoaingError";

import {actions as appActions} from "../../redux/modules/app";


export class FetchInterface extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false
    }
  }

  static pageLoadingEnd() {
    store.dispatch(appActions.endPageLoading());
  }

  componentWillReceiveProps() {
    this.setState({
      loading: true,
      error: false
    });

    this.fetchRemoteData();
    FetchInterface.pageLoadingEnd();
  }

  componentDidMount() {
    this.fetchRemoteData();
    FetchInterface.pageLoadingEnd();
  }

  fetchRemoteData = () => {
    throw new Error('Not Implemented.')
  };

  render() {
    if (this.state.error) {
      return (<BlockLoadingError fetchRemoteData={this.fetchRemoteData} error={this.state.error}/>);
    }
    else if (this.state.loading) {
      return (<BlockLoading/>);
    }
    else {
      throw new Error('Not Implemented.');
    }
  }
}