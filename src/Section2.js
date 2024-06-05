// Section2.js
import React from 'react';

const Section2 = () => {
  return (
    <section className="section2">
      <div className="container">
        <div className="heading-container">
          <h1 className="heading">Unlock Education's Full Potential</h1>
        </div>
        <br />
        <div className="spacer"></div>
        <div className="cards">
          <div className="card">
            <img src="live.jpg" alt="Card 1" />
            <h2 className="heading">Live Classes</h2>
            <p>Real-time, interactive lessons with expert educators to engage and inspire students.</p>
          </div>
          <div className="card">
            <img src="modern.jpg" alt="Card 2" />
            <h3 className="heading">Modern Subjects</h3>
            <p>Courses in mathematics, languages, science, and more to prepare students for future success.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
