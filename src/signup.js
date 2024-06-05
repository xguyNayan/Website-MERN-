// SignupForm.js
import React, { useState } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is left empty
        if (!username || !email || !password) {
            setError('Please fill in all fields');
            return;
        }

        // Check if password is at least 8 characters long
        if (password.length < 8) {
            setError('Password must be at least 8 characters long');
            return;
        }

        setError('');

        axios.post('http://localhost:3001/register', { username, email, password })
          .then((result) => {
            console.log(result);
            navigate('/login');
          })
          .catch((err) => {
            console.log(`Error! ${err}`);
            alert("Try again ");
          });
      };
      
    return (
        <>
            <Navbar />
            <div className="signup-container">
                <h2>Sign Up</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className='signup-button'> Sign Up</button>
                </form>
                <div className='link'>
                    <label>
                        Already a user? <Link to={'/login'} className='loginlink'>Login</Link>
                    </label>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
