import React, {Component} from 'react';
import {Row, Col} from 'react-materialize'
import MenuItem from './MenuItem';
import Navigation from './Navigation';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {
        Appetizers: [],
        Entrees: [],
        Desserts: []
      },
      course: 'Entrees',
    }
    this.handleSelect = this.handleSelect.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(menuItem){
    console.log(menuItem);
    this.props.orderList.push(menuItem);
  }

  handleSelect(event) {
    this.setState({
      course: event.target.value,
    })
    console.log(this.state.course);
  }

  componentDidMount() {
    fetch('http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu')
    .then(results => results.json()).then(data => {
      this.setState({
        menu: data[0],
        Appetizers: data[0].Appetizers,
        Entrees: data[0].Entrees,
        Desserts: data[0].Desserts,
      });
    })
  }

  render() {

    let courseItems = this.state.menu[this.state.course].map((item, index) => {
      return <MenuItem key={index} item={item} add={this.handleAdd} orderList={this.props.orderList} />
    })


    return(
      <div className="menu">
        <h3>MENU</h3>
        <Row className="menunav">
          <Col s={4}><input className="menuselect" value="Appetizers" type="button" onClick={ this.handleSelect } /></Col>
          <Col s={4}><input className="menuselect" value="Entrees" type="button" onClick={ this.handleSelect } autoFocus/></Col>
          <Col s={4}><input className="menuselect" value="Desserts" type="button" onClick={ this.handleSelect } /></Col>
        </Row>
        <div className="courseitems">
          {courseItems}
        </div>

      </div>

    );
  }
}
