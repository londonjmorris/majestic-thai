import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navigation extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="header-img">
      <nav className="navbar">
        <div className="brand">
          <div className="icon"></div>
          <div><button ><Link to="/" >MAJESTIC THAI</Link></button></div>
        </div>
        <div className="pages">
          <div><button ><Link to="/menu">MENU</Link></button></div>
          <div><button ><Link to="/contact">CONTACT</Link></button></div>
          <div><button ><Link to="/order">MY ORDER</Link></button></div>
        </div>
      </nav>
    </div>
    )
  }
}
