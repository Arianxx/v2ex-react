import React from 'react';

import {RightNavFetch} from "./component/rightNavFetch";
import {SiteInfo} from "./component/siteInfo";

import {actions as siteActions, getSiteStats} from "../../redux/modules/site";


export default class RightNavSiteInfo extends RightNavFetch {
  hadData = () => {
    return Boolean(this.siteInfo);
  };

  rightNavFetch = () => {
    this.store.dispatch(siteActions.getSiteState(this));
  };

  render() {
    if (!this.state.loading && !this.state.error) {
      this.siteInfo = !this.hadData() ? getSiteStats(this.store.getState()) : this.siteInfo;

      return (
        <SiteInfo memberMax={this.siteInfo.member_max} topicMax={this.siteInfo.topic_max}/>
      )
    }

    return super.render();
  }
}