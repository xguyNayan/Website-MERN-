import React, { useState } from 'react';
import './login.css';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{email,password})
    .then(result =>{
      console.log(result)
      if(result.data === "Success"){
        navigate('/CoursesPage')
      }
    })
    .catch(err => console.log(err))
    setError("Please enter a valid email and password");
  }


  return (
    <form onSubmit={handleSubmit} className="login-form">
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <button type="submit" className='submit-button'>Login</button>
        <div className='register-link'>
          <label><Link to={'/signup'}>Register.</Link></label>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
