import './App.css';
import { useState } from 'react';
import resumePDF from './image/Gokul kannan Resume.pdf';
import kanakaNisargaManeLogo from './image/kanakanisargamane-logo-sm-125.png';
import profileImage from './image/Gemini_Generated_Image_9wo17v9wo17v9wo1-removebg-preview.png';
import infinestLogo from './image/infinest_logo-removebg-previews-removebg-preview.png';
import trueCounselLogo from './image/trueCounselLogo.svg';
import dhanvikkLogo from './image/logo-transparent-trim-small.png';
import cheetahLogo from './image/Gemini_Generated_Image_jbtgl4jbtgl4jbtgggg-removebg-preview (1).png';
import haridvarnaLogo from './image/haridvarna-logo.jpg';
import nisargamaneLogo from './image/wt-NISARGA-MANE-LOGO-1.png';
import reniLogo from './image/RENI-LOGO-NEW.jpg';
import nithyamLogo from './image/logo_white.webp';
import paulAgriLogo from './image/paul-agri-logo.jpg';
import kalladikodeLogo from './image/lo.png';
import finlitiLogo from './image/finlitiaipro-png-1 (1).png';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">👋</span>
            Hi, <span className="highlight">V.Gokul Kannan</span> Here
          </div>
          <button className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={activeSection === 'home' ? 'active' : ''}
                onClick={() => handleNavClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={activeSection === 'about' ? 'active' : ''}
                onClick={() => handleNavClick('about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className={activeSection === 'experience' ? 'active' : ''}
                onClick={() => handleNavClick('experience')}
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                className={activeSection === 'projects' ? 'active' : ''}
                onClick={() => handleNavClick('projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={() => handleNavClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section home-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>
              I Build <span className="gradient-text">High-Performance Websites</span>{' '}
              That Drive Business Growth
            </h1>
            <p className="hero-subtitle">
              I build scalable, secure, and conversion-focused websites tailored to modern businesses. 
              With strong expertise in <strong>WordPress development</strong>, I create custom themes and 
              WooCommerce stores optimized for speed, SEO, and seamless user experience — delivering 
              reliable solutions from concept to launch.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-gradient" onClick={() => setActiveSection('contact')}>
                Hire Me!
              </a>
              <a href="#projects" className="btn btn-outline" onClick={() => setActiveSection('projects')}>
                See My Portfolio
              </a>
              <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="btn btn-resume">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                View Resume
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <div className="profile-placeholder">
                <img src={profileImage} alt="V.Gokul Kannan" className="profile-img" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" fill="#f0f8ff"/>
          </svg>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section about-section">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
          My <span className="text-blue">name</span> is V.Gokul Kannan and I <span className="text-blue">help</span> <span className="text-purple">brands</span> grow.
        </p>
        <p className="about-description">
          I'm Gokul Kannan, a dedicated website developer from Coimbatore with a strong passion for building impactful digital solutions. Over the past 2.5+ years, I've delivered 30+ projects including business websites and fully functional eCommerce platforms, helping brands establish a strong and reliable online presence.
        </p>
        <p className="about-description">
          With solid expertise in <strong>WordPress development</strong>, I create custom solutions, integrate advanced features, strengthen website security, and ensure smooth scalability. I focus on structured development, practical problem-solving, and building websites that are easy to manage, efficient to maintain, and designed for long-term business growth.
        </p>

        <div className="skills-container">
          <div className="skills-header">
            <span className="skills-icon">⚙️</span>
            <h3 className="skills-title">Professional Skills</h3>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <span className="skill-name">Web Development</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Wordpress Development</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">User Interface Design</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">SEO Optimizer</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">E-Commerce</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Server Administrator</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Network Security</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Web Penetration</span>
            </div>
          </div>
        </div>

        <div className="skills-container languages-container">
          <div className="skills-header">
            <span className="skills-icon">💻</span>
            <h3 className="skills-title languages-title">Languages</h3>
          </div>
          <div className="skills-grid languages-grid">
            <div className="skill-card">
              <span className="skill-name">HTML</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">CSS 5</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Bootstrap</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">React JS</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Node.js</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Wordpress</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">PHP</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">MySQL</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Prisma DB</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Nmap</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Metasploit</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Kali Linux</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Git</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Photoshop</span>
            </div>
            <div className="skill-card">
              <span className="skill-name">Canva Design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-item current">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>WordPress Developer</h3>
                <span className="company">Safe Software</span>
                <span className="duration">December 2024 – Present</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Web Developer</h3>
                <span className="company">Enviq Tech</span>
                <span className="duration">March 2024 – November 2024</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Digital Skills Trainer</h3>
                <span className="company">Enviq Tech</span>
                <span className="duration">March 2024 – November 2024</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Internship Trainer</h3>
                <span className="company">Enviq Tech</span>
                <span className="duration">March 2024 – November 2024</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Web Development Intern</h3>
                <span className="company">Dev Bee</span>
                <span className="duration">July 2023 – January 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          <a href="https://kanakanisargamane.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={kanakaNisargaManeLogo} alt="Kanaka Nisarga Mane" className="project-logo" />
            </div>
            <h3>KANAKA NISARGA MANE</h3>
            <p>Organic farm & eco-tourism destination website with booking system</p>
          </a>
          <a href="https://infinestech.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={infinestLogo} alt="Infinest Tech" className="project-logo" />
            </div>
            <h3>INFINEST TECH</h3>
            <p>Smart, scalable solutions in web/mobile development, AI & IoT systems</p>
          </a>
          <a href="https://gm.truecounsel.in/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={trueCounselLogo} alt="TrueCounsel" className="project-logo" />
            </div>
            <h3>TRUECOUNSEL</h3>
            <p>A digital tool to manage & optimise legal operations for corporates</p>
          </a>
          <a href="https://dhanvikkexports.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={dhanvikkLogo} alt="Dhanvikk Exports" className="project-logo" />
            </div>
            <h3>DHANVIKK EXPORTS</h3>
            <p>Fresh Flowers Delivered with Love</p>
          </a>
          <a href="https://cheetahenterprisesonline.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={cheetahLogo} alt="Cheetah Enterprise" className="project-logo" />
            </div>
            <h3>CHEETAH ENTERPRISE</h3>
            <p>High-quality cleaning products that remove tough stains, kill germs, and keep your home fresh and hygienic.</p>
          </a>
          <a href="https://haridvarna.in/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={haridvarnaLogo} alt="Haridvarna" className="project-logo" />
            </div>
            <h3>HARIDVARNA</h3>
            <p>Transform Your Health Naturally with Naturopathy, Yoga and Functional Nutrition</p>
          </a>
          <a href="https://nisargamane.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={nisargamaneLogo} alt="Nisarga Mane" className="project-logo" />
            </div>
            <h3>NISARGA MANE</h3>
            <p>Nisarga Mane treats autoimmune and other diseases through natural, holistic healing.</p>
          </a>
          <a href="https://renikidneycare.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={reniLogo} alt="Reni Kidney Care" className="project-logo" />
            </div>
            <h3>RENI KIDNEY CARE</h3>
            <p>Your trusted center for advanced kidney and urology treatments in Pollachi</p>
          </a>
          <a href="https://webdev.nithyaminnovations.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={nithyamLogo} alt="Nithyam Innovations" className="project-logo" />
            </div>
            <h3>NITHYAM INNOVATIONS</h3>
            <p>AI-powered financial solutions for smarter risk management and faster decision-making.</p>
          </a>
          <a href="https://paulagri.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={paulAgriLogo} alt="Paul Agri" className="project-logo" />
            </div>
            <h3>PAUL AGRI</h3>
            <p>Agricultural, Historical Research & Social Trust</p>
          </a>
          <a href="https://kalladikodescb.com/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={kalladikodeLogo} alt="Kalladikode" className="project-logo" />
            </div>
            <h3>KALLADIKODE</h3>
            <p>About kalladikode Service Co-operative Bank Ltd.</p>
          </a>
          <a href="https://finlitiai.pro/" target="_blank" rel="noopener noreferrer" className="project-card project-link">
            <div className="project-image project-logo-bg">
              <img src={finlitiLogo} alt="Finliti AI" className="project-logo" />
            </div>
            <h3>FINLITI AI</h3>
            <p>We Are the Best Delinquency Litigation Management System.</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>
        
        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="https://wa.me/9600925488" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/gokul-kannan-99a4b5329/" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </a>
          <a href="https://github.com/gokulKov" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
          <a href="mailto:gokulkannan24005@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/gokul__lm10" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </a>
        </div>

        {/* Call to Action */}
        <div className="cta-container">
          <p className="cta-text">Ready to start your project? Let's talk!</p>
          <a href="tel:9600925488" className="btn btn-call">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
            </svg>
            Call Now: +91 9600925488
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
