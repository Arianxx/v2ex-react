import React, {Component} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

import './header.css'


export default class Header extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <a href='#'>V2EX</a>
        </Navbar.Header>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href='#'>
              首页
            </NavItem>
            <NavItem href='#'>
              最新主题
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}