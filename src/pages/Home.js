import React, { useState, useEffect } from 'react';
import './Home.css';
import 'boxicons/css/boxicons.min.css'; // Importing boxicons CSS

const Home = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      let sections = document.querySelectorAll('section');
      let navLinks = document.querySelectorAll('header nav a');

      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
          sec.classList.add('show-animate');
        } else {
          sec.classList.remove('show-animate');
        }
      });

      let header = document.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      let footer = document.querySelector('footer');
      footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <header className={`header ${menuActive ? 'active' : ''}`}>
        <a href="#" className="logo">FS<span className="animate" style={{ '--i': 1 }}></span></a>
        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}>
          <span className="animate" style={{ '--i': 2 }}></span>
        </div>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          
          <a href="#contact">Contact</a>
          <span className="active-nav"></span>
          <span className="animate" style={{ '--i': 2 }}></span>
        </nav>
      </header>

      {/* Home Section */}
      <section className="home show-animate" id="home">
        <div className="home-content">
          <h1>Welcome to <span>"FreshSaver"!</span><span className="animate" style={{ '--i': 2 }}></span></h1>
          <p>Your ultimate destination for preserving freshness with smart solutions and eco-friendly products. Discover how we're redefining freshness, one innovation at a time.
            <span className="animate" style={{ '--i': 4 }}></span>
          </p>
          <div className="btn-box">
            <a href="#" className="btn">Hire Me</a>
            <a href="#" className="btn">Let's Talk</a>
            <span className="animate" style={{ '--i': 5 }}></span>
          </div>
        </div>
        <div className="home-sci">
          <a href="#"><i className='bx bxl-facebook'></i></a>
          <a href="#"><i className='bx bxl-twitter'></i></a>
          <a href="#"><i className='bx bxl-linkedin'></i></a>
          <span className="animate" style={{ '--i': 6 }}></span>
        </div>
        <div className="home-imgHover"></div>
        <span className="animate home-img" style={{ '--i': 7 }}></span>
      </section>

      {/* About Section */}
      <section className="about" id="about">
  <h2 className="heading">About <span>Me</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
  <div className="about-img">
    <img src="images/about.jpg" alt=""/>
    <span className="circle-spin"></span>
    <span className="animate scroll" style={{ '--i': 2 }}></span>
  </div>
  <div className="about-content">
    <h3>Hi there! Glad to see you here.<span className="animate scroll" style={{ '--i': 3 }}></span></h3>
    <p>Hello! Nishat Mahmud here. A technology fanatic!<br/>
      Currently, I am enrolled in the Department of Computer Science and Engineering at Jagannath University in Dhaka. My early education was completed from Mymensingh Zilla School and Govt. Ananda Mohon College in Mymensingh.
      <span className="animate scroll" style={{ '--i': 4 }}></span>
    </p>
    <div className="btn-box btns">
      <a href="#contact" className="btn">Contact Me</a>
      <span className="animate scroll" style={{ '--i': 5 }}></span>
    </div>
  </div>
</section>


      {/* Education Section */}
      <section className="education" id="education">
        <h2 className="heading">My <span>Journey</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <div className="education-row">
          <div className="education-column">
            <h3 className="title">Education<span className="animate scroll" style={{ '--i': 2 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                  <h3>Master Degree - University</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2018 - 2019</div>
                  <h3>Master Degree - University</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2019 - 2020</div>
                  <h3>Master Degree - University</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <span className="animate scroll" style={{ '--i': 3 }}></span>
            </div>
          </div>
          <div className="education-column">
            <h3 className="title">Experience<span className="animate scroll" style={{ '--i': 5 }}></span></h3>
            <div className="education-box">
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2017 - 2018</div>
                  <h3>Web Developer - Company</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2018 - 2019</div>
                  <h3>Web Developer - Company</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year"><i className='bx bxs-calendar'></i> 2019 - 2020</div>
                  <h3>Web Developer - Company</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis dolorem harum dolorum debitis. Magni, iste! Perferendis laborum reprehenderit dolorum totam.</p>
                </div>
              </div>
              <span className="animate scroll" style={{ '--i': 6 }}></span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <div className="skills-row">
          <div className="skills-column">
            <h3 className="title">Coding Skills<span className="animate scroll" style={{ '--i': 2 }}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>HTML<span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>CSS<span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>JavaScript<span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Python<span>80%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>React<span>50%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <span className="animate scroll" style={{ '--i': 3 }}></span>
              </div>
            </div>
          </div>
          <div className="skills-column">
            <h3 className="title">Professional Skills<span className="animate scroll" style={{ '--i': 5 }}></span></h3>
            <div className="skills-box">
              <div className="skills-content">
                <div className="progress">
                  <h3>Communication<span>70%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Team Work<span>50%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Project Management<span>60%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <div className="progress">
                  <h3>Creativity<span>90%</span></h3>
                  <div className="bar"><span></span></div>
                </div>
                <span className="animate scroll" style={{ '--i': 6 }}></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me!</span><span className="animate scroll" style={{ '--i': 1 }}></span></h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="name" required/>
              <label>Your Name</label>
              <span className="animate scroll" style={{ '--i': 2 }}></span>
            </div>
            <div className="input-field">
              <input type="email" name="email" required/>
              <label>Your Email</label>
              <span className="animate scroll" style={{ '--i': 3 }}></span>
            </div>
          </div>
          <div className="input-box">
            <div className="input-field">
              <input type="text" name="subject" required/>
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
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-text">
          <p>© 2023 Nishat Mahmud. All Rights Reserved.<span className="animate scroll" style={{ '--i': 1 }}></span></p>
        </div>
        <div className="footer-iconTop">
          <a href="#"><i className="bx bx-up-arrow-alt"></i></a>
          <span className="animate scroll" style={{ '--i': 2 }}></span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
