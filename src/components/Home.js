import React, {Component} from 'react';
import {Icon, Carousel} from 'react-materialize';
import {Link} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return(
      <div className="home">
        <div className="thirds">
          <div className="third">
            <Icon className="icon2">phone_iphone</Icon>
            <p>864-221-9529</p>
            <Link className="link" to="/Contact">CONTACT US</Link>
          </div>
          <div className="third center">
            <Icon className="icon2">access_time</Icon>
            <p>11:30A - 2:30P  /  5P - 10P</p>
            <Link className="link" to="/Contact">VIEW ALL HOURS</Link>
          </div>
          <div className="third">
            <Icon className="icon2">place</Icon>
            <p>GREENVILLE, SC</p>
            <Link className="link" to="/Contact">GET DRIVING DIRECTIONS</Link>
          </div>
        </div>
        <div className="gallery">
          <h3>GALLERY</h3>
          <Carousel>
            <div className="foodpics" id="foodpic1"></div>
            <div className="foodpics" id="foodpic2"></div>
            <div className="foodpics" id="foodpic3"></div>
            <div className="foodpics" id="foodpic4"></div>
            <div className="foodpics" id="foodpic5"></div>
          </Carousel>
          <Link className="link2" to="/Menu">SEE FULL MENU</Link>
        </div>
        <div className="history">
          <div className="history-left">
            <h1>HISTORY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Link className="link2" to="/Contact">READ MORE</Link>
          </div>
          <div className="history-right"></div>
        </div>
      </div>
    )
  }
}
