import React, { useState } from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpLoginForm from './components/auth';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/preferences'>
            <Preferences />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
