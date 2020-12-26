import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import Spents from './components/Spents'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact={true} component={App} />
    <Route path="/Spents" component={Spents} />
  </BrowserRouter>,
  document.getElementById('root')
);