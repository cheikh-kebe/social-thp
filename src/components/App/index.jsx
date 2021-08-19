import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from '../../pages/Home';
import { Login } from '../../pages/Login';
import { Profile } from '../../pages/Profile';
import { Register } from '../../pages/Register';
import { Header } from '../Header';


export const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
