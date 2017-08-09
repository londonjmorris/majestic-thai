import React, { Component } from 'react';
import {CollectionItem} from 'react-materialize';

export default class OrderItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log(this.props.index);
    return(
      <CollectionItem className="orderitem" >
        <p className="item">{this.props.item.dish}</p>
        <span className="price">$ {this.props.item.price}</span>
      </CollectionItem>
    )
  }
}
