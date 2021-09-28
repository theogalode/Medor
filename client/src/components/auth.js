import React, { useState } from 'react';
import { Modal, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';

const SignUpLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post('/medor/api/auth/register_login', userData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
        console.log(err.response);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <input type='text' name='email' placeholder='Email' />
      <br></br>
      <label>
        <input type='password' name='password' placeholder='Password' />
      </label>
      <br></br>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default SignUpLoginForm; 
