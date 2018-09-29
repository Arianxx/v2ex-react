import React, {Component} from 'react';

import {UserProfile} from "../../components/user/userProfile";


export default class User extends Component {
  render() {
    return <UserProfile username={this.props.match.params.username}/>
  }
}