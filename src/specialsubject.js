import React from 'react';
import Navbar from './Navbar';
import './specialsubject.css';
import { Link } from 'react-router-dom';

const SpecialCoursesPage = ({ video }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="S-cards">
        <div className="S-card">
          <img src="coding.jpeg" alt="Card 1" />
          <Link to={'/coding'} className='code-link'>
          <h2 className="heading">Coding</h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
          </Link>
        </div>
        <div className="S-card">
          <img src="ai.jpeg" alt="Card 2" />
          <h3 className="heading">Artificial Inteligence</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
        <div className="S-card">
          <img src="ml.jpg" alt="Card 1" />
          <h2 className="heading">Machine Learning</h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
        </div>
        <div className="S-card">
          <img src="ss.png" alt="Card 2" />
          <h3 className="heading">Soft Skills</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
        <div className="S-card">
          <img src="ml.jpg" alt="Card 1" />
          <h2 className="heading">Machine Learning</h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
        </div>
        <div className="S-card">
          <img src="ss.png" alt="Card 2" />
          <h3 className="heading">Soft Skills</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialCoursesPage;
