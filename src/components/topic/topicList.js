import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


export default class TopicList extends Component {
  render() {
    return (
      <ListGroup>
        {
          this.props.children.map ? this.props.children.map(c => (
              <ListGroupItem>{c}</ListGroupItem>
            ))
            : <ListGroupItem>{this.props.children}</ListGroupItem>
        }
      </ListGroup>
    )
  }
}