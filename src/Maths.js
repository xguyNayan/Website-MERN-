// MathCoursePage.js

import React from 'react';
import './MathCoursePage.css'; // Importing CSS
import Navbar from './Navbar'; // Assuming you have a Navbar component
import Footer from './Footer'; // Assuming you have a Footer component
import { Link } from 'react-router-dom';

const MathCoursePage = () => {
  // Define a CourseCard component inline
  const CourseCard = ({ title, instructor, rating, students, price }) => (
    <div className="course-card">
      <div className="course-info">
        <h3 className="course-title">{title}</h3>
        <p className="course-instructor">Instructor: {instructor}</p>
        <p className="course-rating">Rating: {rating}</p>
        <p className="course-students">Students Enrolled: {students}</p>
        <p className="course-price">Price: {price}</p>
      </div>
    </div>
  );

  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-title">Mathematics Course</h1>
        <p className="hero-description">Unlock your potential with our comprehensive Mathematics course.</p>
        <button className="hero-button">Enroll Now</button>
      </div>
      <div className="course-container">
        <h2 className="section-title">Popular Courses</h2>
        <div className="course-grid">
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Algebra Essentials"
              instructor="John Doe"
              rating={4.5}
              students={5000}
              price="Rs1999"
            />
          </Link>
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Geometry Fundamentals"
              instructor="Jane Smith"
              rating={4.7}
              students={6000}
              price="Rs2999"
            />
          </Link>
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Algebra Essentials"
              instructor="John Doe"
              rating={4.5}
              students={5000}
              price="Rs1999"
            />
          </Link>
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Geometry Fundamentals"
              instructor="Jane Smith"
              rating={4.7}
              students={6000}
              price="Rs2999"
            />
          </Link>
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Algebra Essentials"
              instructor="John Doe"
              rating={4.5}
              students={5000}
              price="Rs1999"
            />
          </Link>
          <Link to={'/enroll'} className="course-link">
            <CourseCard
              title="Geometry Fundamentals"
              instructor="Jane Smith"
              rating={4.7}
              students={6000}
              price="Rs2999"
            />
          </Link>
          {/* Add more CourseCard components for other courses */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MathCoursePage;
