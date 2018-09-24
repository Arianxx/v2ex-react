import React, {PureComponent} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';


export default class TopicList extends PureComponent {
  render() {
    return (
      <ListGroup>
        {
          this.props.children.map ? this.props.children.map(c => (
              <ListGroupItem style={{padding: 0}}>{c}</ListGroupItem>
            ))
            : <ListGroupItem style={{padding: 0}}>{this.props.children}</ListGroupItem>
        }
      </ListGroup>
    )
  }
}