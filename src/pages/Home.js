import React, { useState, useEffect } from 'react';
import './Home.css';
import 'boxicons/css/boxicons.min.css'; // Importing boxicons CSS
import { Link } from 'react-router-dom'

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('header nav a');

      if (sections.length === 0 || navLinks.length === 0) {
        return;
      }

      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            if (links) {
              links.classList.remove('active');
              const link = document.querySelector(`header nav a[href *= ${id}]`);
              if (link) {
                link.classList.add('active');
              }
            }
          });
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      const header = document.querySelector('header');
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      const footer = document.querySelector('footer');
      if (footer) {
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='h-screen'>
      {/* Header */}
      <header className={`header ${menuActive ? 'active' : ''}`}>
        <a href="#" className="logo">FS<span className="animate" style={{ '--i': 1 }}></span></a>
        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}>
          <span className="animate" style={{ '--i': 2 }}></span>
        </div>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#education">Sevices</a>
          <a href="#contact">Feedback</a>
          <span className="active-nav"></span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </nav>
      </header >

      {/* Home Section */}
      < section className="home show-animate" id="home" >
        <div className="home-content">
          <h1>Welcome to <span>"FreshSaver"!</span><span className="animate" style={{ '--i': 2 }}></span></h1>
          <p>Your ultimate destination for preserving freshness with smart solutions<br /> and eco-friendly products. Discover how we're redefining freshness,<br /> one innovation at a time.
            <span className="animate" style={{ '--i': 4 }}></span>
          </p>
          <div className="btn-box">
            <Link to="/details" className="btn">Scan Now</Link>
            <Link to="/display" className="btn">View</Link>
            <span className="animate" style={{ '--i': 5 }}></span>
          </div>
        </div>

        <div className="home-imgHover"></div>
        <span className="animate home-img" style={{ '--i': 7 }}></span>
      </section >

      {/* About Section */}
      < section className="about" id="about" >
        <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <div className="about-img">
          <img src="/assets/about.jpg" alt="" />
          <span className="circle-spin"></span>
          <span className="animate scroll" style={{ '--i': 2 }}></span>
        </div>
        <div className="about-content">
          <h3>Efficient Inventory Solutions<span className="animate scroll" style={{ '--i': 3 }}></span></h3>
          <p>FreshSaver is a comprehensive inventory management system designed to streamline and enhance the process of tracking and managing inventory. Utilizing barcode scanning technology, FreshSaver provides real-time updates, ensures accurate stock levels, and offers detailed insights into inventory movements. Our solution aims to reduce waste, optimize storage space, and improve overall efficiency in inventory management.
            <span className="animate scroll" style={{ '--i': 4 }}></span>
          </p>

        </div>
      </section >


      {/* Education Section */}
      < section className="education" id="education" >
        <h2 className="heading">Our <span>Services</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title"><span className="animate scroll" style={{ '--i': 2 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">

                  <h3>Smart Inventory Management</h3>
                  <p>Keep a detailed inventory of your pantry items, tracking quantities and expiration dates to ensure you know what you have and avoid waste.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">

                  <h3>Expiry Date Notifications</h3>
                  <p>Receive timely notifications when products are nearing their expiry dates, helping you use groceries efficiently and reduce food waste.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">

                  <h3>Barcode Scanning</h3>
                  <p>Quickly add items to your inventory using our barcode scanning feature, saving time and ensuring accuracy</p>
                </div>
              </div>
              <span className="animate scroll" style={{ '--i': 3 }}></span>
            </div>
          </div>
          <div className="education-column">
            <h3 className="title"><span className="animate scroll" style={{ '--i': 5 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">

                  <h3>Recipe Recommendations</h3>
                  <p>Get personalized recipe suggestions based on ingredients nearing expiry, making meal planning easy and helping you use up soon-to-expire products.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">

                  <h3>Shopping List Generation</h3>
                  <p>Automatically generate shopping lists based on your inventory and consumption patterns, ensuring you never forget an essential item.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">

                  <h3>User-friendly Interface</h3>
                  <p>Our app features an intuitive interface, making it easy for anyone to manage groceries and plan meals efficiently.</p>
                </div>
              </div>
              <span className="animate scroll" style={{ '--i': 6 }}></span>
            </div>
          </div>
        </div>
      </section >


      {/* Contact Section */}
      < section className="contact" id="contact" >
        <h2 className="heading">Feedback <span></span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="name" required />
              <label>Your Name</label>
              <span className="animate scroll" style={{ '--i': 2 }}></span>
            </div>
            <div className="input-field">
              <input type="email" name="email" required />
              <label>Your Email</label>
              <span className="animate scroll" style={{ '--i': 3 }}></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="subject" required />
              <label>Subject</label>
              <span className="animate scroll" style={{ '--i': 4 }}></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field textarea">
              <textarea name="message" required></textarea>
              <label>Your Message</label>
              <span className="animate scroll" style={{ '--i': 5 }}></span>
            </div>
          </div>
          <div className="btn-box btns">
            <button type="submit" className="btn">Send</button>
            <span className="animate scroll" style={{ '--i': 6 }}></span>
          </div>
        </form>
      </section >

      {/* Footer */}
      < footer >
        <div className="footer-text">
          <p>© 2023 Nishat Mahmud. All Rights Reserved.<span className="animate scroll" style={{ '--i': 1 }}></span></p>
        </div>
        <div className="footer-iconTop">
          <a href="#"><i className="bx bx-up-arrow-alt"></i></a>
          <span className="animate scroll" style={{ '--i': 2 }}></span>
        </div>
      </footer >
    </div >
  );
};

export default Home;