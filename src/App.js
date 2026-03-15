import { useState, useEffect, useRef } from 'react';
import './App.css';

const SECTIONS = ['home', 'experience', 'education', 'projects'];

const EXPERIENCE = [
  {
    logo: 'casca.jpeg',
    company: 'Casca',
    badge: 'YC S23',
    role: 'Software Engineer Intern',
    period: 'Feb 2025 — Jan 2026',
    tools: ['Next.js', 'tRPC', 'Mapbox', 'Python', 'AWS S3', 'OpenAI'],
  },
  {
    logo: 'omers.png',
    company: 'OMERS',
    role: 'Fullstack Software Engineer Intern',
    period: 'Sep 2024 — Dec 2024',
    tools: ['Next.js', 'Nest.js', 'TypeScript', 'Node.js'],
  },
  {
    logo: 'interac.png',
    company: 'Interac Corp.',
    role: 'Backend Software Developer Intern',
    period: 'Jan 2024 — Apr 2024',
    tools: ['Java', 'Spring Boot', 'JUnit', 'SonarQube'],
  },
  {
    logo: 'omers.png',
    company: 'OMERS',
    role: 'Backend Software Engineer Intern',
    period: 'Jan 2023 — Apr 2023',
    tools: ['Java', 'Spring Boot', 'React.js', 'Postman'],
  },
];

const PROJECTS = [
  {
    name: 'Laurier Flow',
    role: 'Lead Engineer & Co-Founder',
    url: 'https://laurierflow.ca/',
    urlLabel: 'laurierflow.ca',
    desc: 'A full-stack course review platform for Laurier students. Built with Next.js, Supabase (PostgreSQL), and a Puppeteer scraper with CRON-based automation and exponential backoff.',
  },
  {
    name: 'The Blessed Path',
    role: 'Founder',
    url: 'https://theblessedpath.faith',
    urlLabel: 'theblessedpath.faith',
desc: 'An Islamic scripture platform supporting 40+ languages. Powered by OpenAI with dynamic scripture citations, built on React.js, Flask, and AWS Lambda.',
  },
  {
    name: 'Hack the North — Frontend Challenge',
    url: 'https://htn-fe-challenge.vercel.app/',
    urlLabel: 'htn-fe-challenge.vercel.app',
    desc: 'A polished event viewer for Hack the North with mock authentication and private event gating. Built with Next.js, React contexts, and DaisyUI.',
  },
  {
    name: 'Chess++',
    url: 'http://bit.ly/3TXyw0D',
    urlLabel: 'bit.ly/3TXyw0D',
    desc: 'A C++ chess engine built from scratch with UML-driven design. Applies Observer, Factory, and MVC patterns with an X11 GUI for real-time move highlighting.',
  },
  {
    name: 'Astroworld',
    url: 'https://bit.ly/3Q5RfBN',
    urlLabel: 'bit.ly/3Q5RfBN',
    desc: 'A Java desktop game and jukebox application — a high school labour of love. Features audio visualisation, a mini game, sorting algorithms, and persistent file storage.',
    note: true,
  },
];

/* -----------------------------------------------
   Fade-in hook (IntersectionObserver)
----------------------------------------------- */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* -----------------------------------------------
   Reusable section block
----------------------------------------------- */
function Section({ id, label, intro, children }) {
  const ref = useFadeIn();
  return (
    <section id={id} className="content-section fade-in" ref={ref}>
      <div className="section-header">
        <span className="section-label">{label}</span>
        <div className="section-line" />
      </div>
      {intro && <p className="section-intro">{intro}</p>}
      {children}
    </section>
  );
}

/* -----------------------------------------------
   App
----------------------------------------------- */
export default function App() {
  const [active, setActive] = useState('home');

  /* Track active section on scroll */
  useEffect(() => {
    const handler = () => {
      let current = 'home';
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 260) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="site-wrapper">

      {/* ── SIDEBAR ──────────────────────────────── */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-monogram">F.Q.</div>
          <nav className="sidebar-nav">
            {SECTIONS.map(s => (
              <button
                key={s}
                className={`nav-item${active === s ? ' active' : ''}`}
                onClick={() => scrollTo(s)}
              >
                {s.toUpperCase()}
              </button>
            ))}
          </nav>
        </div>
        <div className="sidebar-bottom">
          <div className="social-links">
            <a href="https://linkedin.com/in/faizaan-qureshi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src="linkedin.svg" alt="" />
            </a>
            <a href="https://github.com/faizaanqureshi" target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src="github.svg" alt="" />
            </a>
            <a href="https://faizaanqureshi.medium.com" target="_blank" rel="noreferrer" aria-label="Medium">
              <img src="medium.svg" alt="" />
            </a>
            <a href="https://instagram.com/faizaanqureshi_/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <img src="instagram.svg" alt="" />
            </a>
          </div>
          <a href="Faizaan Qureshi Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">
            RÉSUMÉ ↗
          </a>
          <p className="sidebar-copyright">© 2026</p>
        </div>
      </aside>

      {/* ── MOBILE TOP NAV ───────────────────────── */}
      <nav className="mobile-nav">
        <span className="mobile-monogram">F.Q.</span>
        <div className="mobile-nav-links">
          {SECTIONS.map(s => (
            <button
              key={s}
              className={active === s ? 'active' : ''}
              onClick={() => scrollTo(s)}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      {/* ── MAIN ─────────────────────────────────── */}
      <main className="main-content">

        {/* HERO */}
        <section id="home" className="hero-section">
          <div className="hero-inner">
            <div className="hero-text">
              <h1 className="hero-name">
                <span>FAIZAAN</span>
                <span>QURESHI</span>
              </h1>
              <p className="hero-title">Software Engineer</p>
              <div className="hero-rule" />
              <p className="hero-desc">
                I build software that solves real problems — blending technical rigour
                with a business-minded perspective cultivated through a Computer Science
                &amp; BBA double degree.
              </p>
            </div>
            <div className="hero-photo-wrap">
              <img src="profile.jpg" alt="Faizaan Qureshi" className="hero-photo" />
              <div className="hero-photo-frame" />
            </div>
          </div>
          <div className="hero-scroll">
            <span>scroll</span>
            <div className="hero-scroll-line" />
          </div>
        </section>

        {/* EXPERIENCE */}
        <Section id="experience" label="Experience">
          <div className="experience-list">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="exp-item">
                <div className="exp-logo-wrap">
                  <img src={exp.logo} alt={exp.company} className="exp-logo" />
                </div>
                <div>
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-company-row">
                    <span className="exp-company">{exp.company}</span>
                    {exp.badge && <span className="exp-badge">{exp.badge}</span>}
                  </div>
                  <div className="exp-tools">
                    {exp.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section
          id="education"
          label="Education"
          intro="Enrolled in a double degree program — Computer Science at Waterloo and Business Administration at Laurier — bridging technical depth with strategic business thinking."
        >
          <div className="education-list">
            <div className="edu-item">
              <img src="waterloo.png" alt="University of Waterloo" className="edu-logo" />
              <div>
                <h3 className="edu-school">University of Waterloo</h3>
                <p className="edu-degree">Honours Bachelor of Computer Science</p>
                <p className="edu-period">Expected May 2026</p>
              </div>
            </div>
            <div className="edu-item">
              <img src="laurier.png" alt="Wilfrid Laurier University" className="edu-logo" />
              <div>
                <h3 className="edu-school">Wilfrid Laurier University</h3>
                <p className="edu-degree">Honours Bachelor of Business Administration</p>
                <p className="edu-period">Expected May 2026</p>
              </div>
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" label="Projects">
          <div className="projects-list">
            {PROJECTS.map((proj, i) => (
              <div key={i} className={`project-item${proj.img ? ' has-image' : ''}`}>
                {proj.img && (
                  <img src={proj.img} alt={proj.name} className="project-img" />
                )}
                <div>
                  <div className="project-header">
                    <h3 className="project-name">{proj.name}</h3>
                    <a href={proj.url} target="_blank" rel="noreferrer" className="project-link">
                      {proj.urlLabel} ↗
                    </a>
                  </div>
                  {proj.role && <p className="project-role">{proj.role}</p>}
                  <p className="project-desc">{proj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <footer className="site-footer">
          <p>Designed &amp; built by Faizaan Qureshi</p>
          <a href="mailto:faizaanq@gmail.com">Get in touch ↗</a>
        </footer>

      </main>
    </div>
  );
}
