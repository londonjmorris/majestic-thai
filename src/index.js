import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Menu  from './components/Menu';
import Order from './components/Order';
import Contact from './components/Contact'
import Home from './components/Home';
import BaseLayout from './components/BaseLayout';

let orderList = [];

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route path='/menu' render={ (props) => <Menu {...props} orderList={orderList}/>}/>
        <Route path='/order' render={ (props) => <Order {...props} orderList={orderList}/>}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/' component={Home}/>
      </Switch>
    </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
