import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import LoginForm from './login';
function App() {
  return (
    <div>
      <header className="navbar">
        <div className="container">
          <img src="preview.jpg" alt="Logo" className="logo" />
          <div className="nav-items">
            <nav>
              <ul>
                <li><Link to={'/'} >Home</Link></li>
                <li><Link to={'/CoursesPage'} >Courses</Link></li>
              </ul>
            </nav>
          </div>
          <button className="button"><Link to={'/signup'} className='link1'></Link></button>
        </div>
      </header>

      <hr className="line" />

      {/* Section 1 */}
      <section className="section1">
        <div className="container">
          <div className="content">
            <h1 className="heading">Unlock the Power of Education with Ryzu Academy</h1>
            <p className="subheading">Welcome to Ryzu Academy! Our online educational company offers live sessions for you to learn from the comfort of your own home. We're dedicated to providing accessible education for all, so you can reach your full potential and achieve your dreams.</p>
            <button className="button">Learn More</button>
          </div>
          <div className="image-container">
            <img src="hero.jpg" alt="Image" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
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

      {/* Section 3 */}
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
      {/*section 4*/}
      <section className="section4">
        <div className="container">
          <h2 className="heading">Testimonials</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"Ryzu Academy has transformed the way I learn."</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>"I'm so grateful for Ryzu Academy." </p>
              <p>- Jane Smith</p>
            </div>
            <div className="testimonial">
              <p>"Ryzu Academy has transformed the way I learn."</p>
              <p>- John Doe</p>
            </div>
            <div className="testimonial">
              <p>"I'm so grateful for Ryzu Academy."</p>
              <p>- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>
      {/*section 5*/}
      <section className="section5">
        <div className="container">
          <h1 className="heading">Join Us Today</h1>
          <p className="subheading">Experience the power of online education with Ryzu Academy.</p>
          <div className="connect-container">
            <div className="form-container">
              <h3 className="form-heading">Contact Us</h3>
              <p>Enroll in our courses and unlock your full potential.</p>
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" rows="4"></textarea>
                </div>
                <button type="submit" className="button">Submit</button>
              </form>
            </div>
            <div className="form-right">
              <img src="contact.jpg" alt="Contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="section6">
        <div className="container">
          <h2 className="heading">Discover Your Passion with Our Specialized Courses </h2>
        </div>
        <button className="button"><Link to={'/login'} className='linkbtn'>Join Now</Link></button>
      </section>


      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="left-section">
              <h2>Ryzu Academy</h2>
              <p>A leading online educational platform offering live classes to students worldwide.</p>
            </div>
            <div className="right-section">
              <nav>
                <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <hr className="line" />
        <p className="copyright">&copy; 2023 Ryzu Academy</p>
      </footer>
    </div>
  );
}

export default App;