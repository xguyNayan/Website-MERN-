import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      setError('Please fill in all fields');
      return;
    }
    axios.post('http://localhost:3001/feedback', { name, email, msg })
      .then((result) => {
        console.log(result);
        setSuccessMessage("Feedback submitted successfully!");
        setName('');
        setEmail('');
        setMsg('');
        setError('');
      })
      .catch((err) => console.log(`Error! ${err}`));
  };

  return (
    <section className="section5">
      <div className="container">
        <h1 className="heading">Join Us Today</h1>
        <p className="subheading">Experience the power of online education with Ryzu Academy.</p>
        <div className="connect-container">
          <div className="form-container">
            <h3 className="form-heading">Contact Us</h3>
            <p>Enroll in our courses and unlock your full potential.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                {error && <div className="error">{error}</div>}
                {successMessage && <div className="success">{successMessage}</div>}
                <label htmlFor="name">Name:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  placeholder="Enter your name" 
                  style={{ width: '100%', marginBottom: '10px' }} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  style={{ width: '100%', marginBottom: '10px' }} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="msg">Message:</label>
                <textarea 
                  id="msg" 
                  name="msg" 
                  value={msg} 
                  rows="4" 
                  onChange={(e) => setMsg(e.target.value)} 
                  placeholder="Enter your message" 
                  style={{ width: '100%', marginBottom: '10px' }} 
                ></textarea>
              </div>
              <button type="submit" className="button" style={{ width: '100%' }}>Submit</button>
            </form>
          </div>
          <div className="form-right">
            <img src="contact.jpg" alt="Contact" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .success {
          color: green;
          text-align: center;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}

export default FeedbackForm;
