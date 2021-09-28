import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {MedorConf} from "./medor.conf";

import './Login.css';

async function loginUser(credentials) {
  axios
    .post(`${MedorConf.AUTH_SERVER_0}/register_login`, {
      email: credentials.email,
      password: credentials.password,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default function Login({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <div className='login-wrapper'>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type='text' onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type='password' onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
