// Section3.js
import React from 'react';

const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <h2 className="heading">Our Courses</h2>
        <div className="cards">
          <div className="card">
            <img src="special.jpg" alt="Course 1" />
            <h3 className="heading">Specialized Courses</h3>
            <p>Unique programs like coding, financial management, AI & ML to advance your skills.</p>
          </div>
          <div className="card">
            <img src="core.jpg" alt="Course 2" />
            <h3 className="heading">Core Subjects</h3>
            <p>Comprehensive subjects including math, english, hindi, sanskrit, german, french, and science.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
