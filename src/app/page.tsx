function Logo() {
  return (
    <span style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em' }}>
      <span style={{ color: '#58a6ff' }}>Terra</span>
      <span style={{ color: '#fff' }}>新云</span>
    </span>
  );
}

function TechParticles() {
  return (
    <div className="tech-particles">
      <div className="particle particle-1" />
      <div className="particle particle-2" />
      <div className="particle particle-3" />
      <div className="particle particle-4" />
      <div className="particle particle-5" />
      <div className="hex hex-1" />
      <div className="hex hex-2" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="app">
      <TechParticles />
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="terra">Terra</span>
            <span className="xinyun">新云</span>
          </h1>
          <p className="hero-subtitle">Empowering Enterprises with AI Transformation</p>
          <p className="hero-description">
            Building intelligent agentic solutions and delivering cutting-edge AI training for the future of business
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </header>

      <section id="services" className="services">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive AI solutions tailored to your business needs</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3>AI Transformation</h3>
            <p>End-to-end digital transformation powered by artificial intelligence. We help enterprises modernize their operations and unlock new possibilities.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <h3>Agentic Solutions</h3>
            <p>Custom AI agents designed for your business needs. Autonomous systems that work alongside your team to drive efficiency and innovation.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3>AI Training Courses</h3>
            <p>Comprehensive training programs for teams and individuals. Master the latest AI technologies and methodologies with expert-led courses.</p>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="section-title">About Us</h2>
          <p>
            At <strong>Terra新云</strong>, we believe in the transformative power of artificial intelligence.
            Our mission is to bridge the gap between cutting-edge AI technology and practical business applications.
          </p>
          <p>
            Founded by industry experts, we specialize in developing agentic AI solutions that automate complex workflows,
            enhance decision-making, and drive measurable business outcomes.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">200+</span>
              <span className="stat-label">AI Agents Deployed</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Professionals Trained</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">Ready to transform your business with AI? Let&apos;s talk.</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" rows={4}></textarea>
          <button type="submit" className="btn-primary">Send Message</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <Logo />
          <p>&copy; 2024 Terraxinyun. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
