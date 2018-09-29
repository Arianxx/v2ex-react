import React, {Component} from 'react';

import {NodeNav} from "./components/nav";

import navJson from './components/nav.json';


export default class Home extends Component {
  render() {
    return (
      <NodeNav navJson={navJson}/>
    )
  }
}