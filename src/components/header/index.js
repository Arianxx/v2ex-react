import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

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
            <NavItem href='#'>
              热门主题
            </NavItem>
            <NavItem href='#'>
              最新主题
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