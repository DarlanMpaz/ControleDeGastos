import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import Spents from './components/Spents'
import AddSpent from './components/AddSpent'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact={true} component={App} />
    <Route path="/Spents" component={Spents} />
    <Route path="/AddSpent" component={AddSpent} />
  </BrowserRouter>,
  document.getElementById('root')
);