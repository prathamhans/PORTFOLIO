import React, { useEffect } from 'react';
import { Mail, ExternalLink, Code2, Database, Layout, Server, Terminal, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.css';

function App() {
  // Simple intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="blob-shape blob-1"></div>
      <div className="blob-shape blob-2"></div>
      <div className="grid-bg"></div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text scroll-animate">
            <h3 className="gradient-text" style={{ fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Hello World, I am
            </h3>
            <h1>Pratham <span className="gradient-text">Hans</span></h1>
            <p className="subtitle">Full Stack Developer & DSA Enthusiast</p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '500px' }}>
              I am an aspiring Software Developer with a strong foundation in JavaScript and backend development using Node.js and Express. I enjoy building practical applications and continuously improving my problem-solving skills through Data Structures and Algorithms.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                <Mail size={20} /> Contact Me
              </a>
              <a href="https://leetcode.com/u/PRATHAM-1258/" target="_blank" rel="noreferrer" className="btn btn-outline">
                <Code2 size={20} /> LeetCode Profile
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/prathamhans" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <FaGithub size={22} />
              </a>
              <a href="https://www.linkedin.com/in/prathamhans1" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <FaLinkedin size={22} />
              </a>
              <a href="mailto:prathamhans10674@gmail.com" className="social-icon" aria-label="Email">
                <Mail size={22} />
              </a>
            </div>
          </div>
          
          <div className="hero-image scroll-animate delay-200">
            <div className="avatar-container">
              <img 
                src="https://avatars.githubusercontent.com/u/145926804?v=4" 
                alt="Pratham Hans" 
                className="avatar" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="section-title scroll-animate">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item scroll-animate delay-100">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">April 2024 - Present</span>
              <h3 className="timeline-title">Software Developer</h3>
              <p className="timeline-subtitle">SMC Finance (Moneywise Financial Services Pvt Ltd) • Delhi, India</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Developing and maintaining robust software solutions, focusing on scalable architecture and efficient backend processes. Working closely with cross-functional teams to deliver high-quality features.
              </p>
            </div>
          </div>
          
          <div className="timeline-item scroll-animate delay-200">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">June 2023 - September 2023</span>
              <h3 className="timeline-title">Associate Consultant Developer</h3>
              <p className="timeline-subtitle">Sequentum • Gurugram, Haryana, India</p>
              <p style={{ color: 'var(--text-secondary)' }}>
                Contributed to development projects, assisting in designing and implementing software solutions. Gained practical experience in agile methodologies and professional software development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="section-title scroll-animate">Technical Arsenal</h2>
        <div className="glass-panel scroll-animate delay-100">
          <div className="skills-grid">
            <div className="skill-tag">
              <Layout className="skill-icon" color="var(--accent-1)" />
              <span>React.js</span>
            </div>
            <div className="skill-tag">
              <Server className="skill-icon" color="var(--accent-2)" />
              <span>Node.js</span>
            </div>
            <div className="skill-tag">
              <Terminal className="skill-icon" color="var(--accent-3)" />
              <span>Express.js</span>
            </div>
            <div className="skill-tag">
              <Code2 className="skill-icon" color="#f7df1e" />
              <span>JavaScript</span>
            </div>
            <div className="skill-tag">
              <Database className="skill-icon" color="#336791" />
              <span>SQL</span>
            </div>
            <div className="skill-tag">
              <ExternalLink className="skill-icon" color="var(--accent-1)" />
              <span>REST API</span>
            </div>
            <div className="skill-tag">
              <BookOpen className="skill-icon" color="var(--accent-4)" />
              <span>DSA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education">
        <h2 className="section-title scroll-animate">Education & Certifications</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <div className="glass-panel scroll-animate delay-100">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <GraduationCap color="var(--accent-1)" /> Education
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Bachelor of Technology (BTech)</h4>
              <p style={{ color: 'var(--accent-2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>July 2019 - July 2023</p>
              <p style={{ color: 'var(--text-secondary)' }}>The Technological Institute of Textiles & Sciences</p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Diploma, Computer Science</h4>
              <p style={{ color: 'var(--accent-2)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>June 2017 - July 2020</p>
              <p style={{ color: 'var(--text-secondary)' }}>Ch Bansi lal polytechnic college</p>
            </div>
          </div>

          <div className="glass-panel scroll-animate delay-200">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <BookOpen color="var(--accent-3)" /> Certifications & Achievements
            </h3>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ marginTop: '5px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-1)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1.05rem' }}>HACKERRANK SQL (Intermediate)</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Demonstrated proficiency in complex SQL queries.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ marginTop: '5px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-2)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1.05rem' }}>Udemy Certifications</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Continuous learning and upskilling in Full Stack Development.</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <div style={{ marginTop: '5px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-3)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1.05rem' }}>Daily DSA Challenger</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Actively solving Data Structures and Algorithms problems on LeetCode to enhance problem-solving skills.</p>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ textAlign: 'center', padding: '4rem 0 2rem', borderTop: '1px solid var(--card-border)', marginTop: '2rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Let's Connect</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Currently based in Bhiwani / Gurugram, India</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          <a href="mailto:prathamhans10674@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)', textDecoration: 'none' }}>
            <Mail size={18} color="var(--accent-1)" /> prathamhans10674@gmail.com
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
            <Briefcase size={18} color="var(--accent-2)" /> 7015895386 (Work)
          </div>
        </div>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Pratham Hans. Built with React & Vite.
        </p>
      </footer>
    </div>
  );
}

export default App;
