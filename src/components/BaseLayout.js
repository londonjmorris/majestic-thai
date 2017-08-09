import React, {Component} from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Menu from './Menu'

export default class BaseLayout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Navigation />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
