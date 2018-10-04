import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

import './header.css'


export default class Header extends PureComponent {
  render() {
    return (
      <Navbar className='appNavbar'>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>V2EX</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text>
            创意工作者们的社区
          </Navbar.Text>
          <Nav pullRight>
            <NavItem componentClass={Link} href="/" to="/">
              首页
            </NavItem>
            <NavItem componentClass={Link} href='/hot' to='/hot'>
              最热主题
            </NavItem>
            <NavItem componentClass={Link} href='/newest' to='/newest'>
              最新主题
            </NavItem>
            <NavItem componentClass={Link} href='/allNodes' to='/allNodes'>
              全部节点
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}