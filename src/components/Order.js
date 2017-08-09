import React, {Component} from 'react';
import OrderItem from './OrderItem'
import {Card, Collection, Button, Icon} from 'react-materialize';

export default class Order extends Component {
  constructor(props){
    super(props);
    }



  render() {
    let total = this.props.orderList.reduce((acc, item)=> acc + Number(item.price),0);
    let orderItems = this.props.orderList.map((item, index) => {
      return <OrderItem key={index} item={item} />
    })
    return(
      <div className="ordercomponent">
        <Card className="menuitem order color" title="My Order">
          <Collection>{orderItems}</Collection>
          <h6>TOTAL</h6>
          <h5>{total.toFixed(2)}</h5>
          <Button className="orderbtn"><Icon className="icon3">shopping_cart</Icon><p>Order</p></Button>
        </Card>
      </div>
    )
  }
}
