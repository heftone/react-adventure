import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import North from "./components/North";
import South from "./components/South";
import East from "./components/East";
import West from "./components/West";
import Error from "./components/Error";



  // eslint-disable-next-line 
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<BrowserRouter>

  <Switch>
   

   <Route path="/" component={Home} exact />
   <Route path="/north" component={North} />
    <Route path="/south" component={South} />
    <Route path="/east" component={East} />
    <Route path="/west" component={West} />
    <Route component={Error} />
    
  

  </Switch>
  <App />
  </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();
