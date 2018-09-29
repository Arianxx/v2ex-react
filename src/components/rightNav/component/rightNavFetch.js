import React from 'react';

import {FetchInterface} from "../../loading/fetchInterface";


export class RightNavFetch extends FetchInterface {
  fetchRemoteData = () => {
    if (!this.hadData()) {
      this.rightNavFetch();
    }
    else {
      this.setState({
        loading: false,
        error: false,
      })
    }
  };

  rightNavFetch = () => {
    throw new Error('Must be inherited.');
  };

  hadData = () => {
    throw new Error('Must be inherited.');
  }
}
