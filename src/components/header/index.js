import React, {PureComponent} from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

import './header.css'


export default class Header extends PureComponent {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>V2EX</a>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href='#'>
              首页
            </NavItem>
            <NavItem href='#'>
              热门主题
            </NavItem>
            <NavItem href='#'>
              全部主题
            </NavItem>
            <NavItem href='#'>
              全部节点
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}