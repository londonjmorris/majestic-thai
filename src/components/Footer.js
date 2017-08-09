import React, {Component} from 'react';
import {Row, Input, Button} from 'react-materialize';

export default class Footer extends Component{
  render(){
    return(
      <div className="footer">
        <h3>STAY UP TO DATE</h3>
        <Row>
          <Input id="email" type="email" label="Email" />
          <Button id="join" waves="light" className="red darken-1">JOIN</Button>
        </Row>
      </div>
    )
  }
}
