import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" exact={true} component={App} />
  </BrowserRouter>,
  document.getElementById('root')
);