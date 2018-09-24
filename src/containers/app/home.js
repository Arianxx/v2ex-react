import React, {Component} from 'react';

import SplitLayout from '../../components/layout/split';


export default class Home extends Component {
  render() {
    return (
      <SplitLayout>
        <SplitLayout.LeftComponents>
          Left
        </SplitLayout.LeftComponents>
        <SplitLayout.RightComponents>
          Right
        </SplitLayout.RightComponents>
      </SplitLayout>
    )
  }
}