import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import FirstPage from './Pages/FirstPage'
import Login from './Pages/Login'
import HomePage from './Pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">

      <Switch>

         <Route path="/home">
            <HomePage/>

          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
              <FirstPage/>
          </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
{/* <img src={logo} className="App-logo" alt="logo" /> */}