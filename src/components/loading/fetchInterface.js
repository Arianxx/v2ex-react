import React, {PureComponent} from 'react';

import {BlockLoading} from "./components/blockLoading";
import {BlockLoadingError} from "./components/blockLoaingError";

import {store} from "../../redux/store";
import {actions as appActions} from "../../redux/modules/app";


export class FetchInterface extends PureComponent {
  constructor(props) {
    super(props);
    this.store = store;
    this.state = {
      loading: true,
      error: false
    }
  }

  pageLoadingEnd() {
    this.store.dispatch(appActions.endPageLoading());
  }

  componentWillReceiveProps() {
    this.setState({
      loading: true,
      error: false
    });

    this.fetchRemoteData();
    this.pageLoadingEnd();
  }

  componentDidMount() {
    this.fetchRemoteData();
    this.pageLoadingEnd();
  }

  fetchRemoteData = () => {
    throw new Error('Must be inherited.')
  };

  render() {
    if (this.state.error) {
      return (<BlockLoadingError fetchRemoteData={this.fetchRemoteData} error={this.state.error}/>);
    }
    else if (this.state.loading) {
      return (<BlockLoading/>);
    }
    else {
      throw new Error('Must be inherited.');
    }
  }
}