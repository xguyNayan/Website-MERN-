// Section4.js
import React from 'react';

function Section4() {
  return (
    <section className="section4 why-us-section">
      <div className="container">
        <h2 className="heading">Why Choose Us?</h2>
        <p className="subheading">Hear from Our Students</p>
        <div className="testimonials">
          {/* Testimonial 1 */}
          <div className="card testimonial">
            <p>"Ryzu Academy has been a game-changer for me. The live classes and interactive sessions have helped me learn so much more effectively."</p>
            <p>- John Doe</p>
          </div>
          {/* Testimonial 2 */}
          <div className="card testimonial">
            <p>"I've never enjoyed learning so much. Ryzu Academy has made education fun and engaging."</p>
            <p>- Jane Smith</p>
          </div>
          {/* Testimonial 3 */}
          <div className="card testimonial">
            <p>"Ryzu Academy has been a game-changer for me. The live classes and interactive sessions have helped me learn so much more effectively."</p>
            <p>- John Doe</p>
          </div>
          {/* Testimonial 4 */}
          <div className="card testimonial">
            <p>"I've never enjoyed learning so much. Ryzu Academy has made education fun and engaging."</p>
            <p>- Jane Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
