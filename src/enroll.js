// SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import './enroll.css'
import { useNavigate } from 'react-router-dom';

const EnrollForm = () => {
    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [Pno, setPno] = useState('');
    const [Address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Fname || !Lname || !Pno || !Address || !email) {
            setError('Please fill in all fields');
            return;
        }

        console.log("First Name:", Fname);
        console.log("Last Name:", Lname);
        console.log("Phone Number:", Pno);
        console.log("Address:", Address);
        console.log("Email:", email);


        axios.post('http://localhost:3001/enroll', { Fname, Lname, Pno, Address, email })
            .then((result) => {
                console.log(result);
                navigate('/App');
            })
            .catch((err) => {
                console.log(`Error! ${err}`);
                alert("Try again ");
            });
    };

    return (
        <>
            <Navbar />
            <div className="enroll-container">
                <h2>Enroll</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit} className="enroll-form">
                    <div className="enroll-form-group">
                        <label htmlFor="Fname">First Name:</label>
                        <input type="text" id="Fname" name="Fname" value={Fname} onChange={(e) => setFname(e.target.value)} />
                    </div>
                    <div className="enroll-form-group">
                        <label htmlFor="Lname">Last Name:</label>
                        <input type="text" id="Lname" name="Lname" value={Lname} onChange={(e) => setLname(e.target.value)} />
                    </div>
                    <div className="enroll-form-group">
                        <label htmlFor="Pno">Phone Number:</label>
                        <input type="text" id="Pno" name="Pno" value={Pno} onChange={(e) => setPno(e.target.value)} />
                    </div>
                    <div className="enroll-form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="Address" name="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="enroll-form-group">
                        <label htmlFor="">email:</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button type="submit" className='enroll-button'> ENROLL </button>

                </form>
            </div>
        </>
    );
};

export default EnrollForm;
