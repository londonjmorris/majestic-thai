import React, { Component } from 'react';
import {Card, Button, Col} from 'react-materialize';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.orderList);
    return(
      <Card className="menuitem" title={this.props.item.dish}>
        <div>
        <p>{this.props.item.description}</p>
        <p className="price">{this.props.item.price}</p>
      </div>
        <div>
        <Button onClick={() => this.props.add(this.props.item)} waves="light" className="add btn">Add to order</Button>
      </div>
    </Card>
    )
  }
}
