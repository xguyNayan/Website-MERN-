import React from 'react';
import './CoursesPage.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const CoursesPage = ({ video }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="Ccards">
        <div className="card">
          <img src="maths2.jpeg" alt="Card 1" />
          <h2 className="heading"><Link to={'/Maths'} className='mathslink'>Mathematics</Link></h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
        </div>
        <div className="card">
          <img src="english.jpeg" alt="Card 2" />
          <h3 className="heading">English</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
        <div className="card">
          <img src="science.jpeg" alt="Card 1" />
          <h2 className="heading">Science</h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
        </div>
        <div className="card">
          <img src="hindi.jpeg" alt="Card 2" />
          <h3 className="heading">Hindi</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
        <div className="card">
          <img src="german.jpeg" alt="Card 1" />
          <h2 className="heading">German</h2>
          <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
        </div>
        <div className="card">
          <img src="sanskrit.png" alt="Card 2" />
          <h3 className="heading">Sanskrit</h3>
          <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
