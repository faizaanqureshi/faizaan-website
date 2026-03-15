import { useState, useEffect, useRef } from 'react';
import './App.css';

const SECTIONS = ['home', 'experience', 'education', 'projects'];

const EXPERIENCE = [
  {
    logo: 'casca.jpeg',
    company: 'Casca',
    badge: 'YC S23',
    role: 'Software Engineer',
    period: 'Feb 2025 — Jan 2026',
    location: 'San Francisco, CA',
    highlights: [
      'Owned CRA compliance reporting for 5–10 large SBA banks — cut report creation from fully manual builds to ~10 minutes via a metadata-driven builder with joins, filters, aggregations, and exports.',
      'Built an AI translation layer enabling automatic report generation from natural language, images, and external artifacts. Forward-deployed at Live Oak Bank, iterating directly with bankers.',
      'Delivered sub-second CRA geospatial mapping via an offline pipeline (Census TIGER → LMI enrichment → MBTiles → S3/Mapbox) with SOX-style immutability enforced by end-to-end Playwright tests.',
    ],
    tools: ['TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Next.js', 'Mapbox', 'Playwright', 'AWS'],
  },
  {
    logo: 'omers.png',
    company: 'OMERS',
    role: 'Full-Stack Software Engineer Intern',
    period: 'Sep 2024 — Dec 2024',
    location: 'Toronto, ON',
    highlights: [
      "Contributed to the myOMERS pension dashboard redesign — OMERS' primary member-facing platform — building UI components (banners, pension summaries, timelines) integrated with Nest.js APIs via tRPC.",
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind', 'tRPC', 'Nest.js'],
  },
  {
    logo: 'interac.png',
    company: 'Interac Corp.',
    role: 'Back-End Software Developer Intern',
    period: 'Jan 2024 — Apr 2024',
    location: 'Toronto, ON',
    highlights: [
      'Owned test quality across 4 critical payment microservices — lifted automated coverage from 40% → 80% and reduced production defects by 30%.',
      'Implemented token-based CIAM access controls in Spring Boot APIs for fraud history retrieval, supporting PCI DSS compliance.',
    ],
    tools: ['Java', 'Spring Boot', 'JUnit', 'Mockito', 'SonarQube'],
  },
  {
    logo: 'omers.png',
    company: 'OMERS',
    role: 'Back-End Software Engineer Intern',
    period: 'Jan 2023 — Apr 2023',
    location: 'Toronto, ON',
    highlights: [
      "Built Spring Boot APIs for Donna, OMERS' internal pension processing platform — handling fund transfers, account state changes, and business rules with 80%+ unit test coverage.",
    ],
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'JUnit', 'Mockito'],
  },
];

const PROJECTS = [
  {
    name: 'Laurier Flow',
    role: 'Lead Engineer & Co-Founder',
    url: 'https://laurierflow.ca/',
    urlLabel: 'laurierflow.ca',
    desc: 'Full-stack course review platform for Laurier students. Next.js, Supabase (PostgreSQL), and a Puppeteer scraper with CRON automation and exponential backoff.',
  },
  {
    name: 'The Blessed Path',
    role: 'Founder',
    url: 'https://theblessedpath.faith',
    urlLabel: 'theblessedpath.faith',
    desc: 'Islamic scripture platform supporting 40+ languages with an AI chatbot providing dynamic scripture citations. React.js, OpenAI APIs, Flask on AWS Lambda.',
  },
  {
    name: 'Hack the North — Frontend Challenge',
    url: 'https://htn-fe-challenge.vercel.app/',
    urlLabel: 'htn-fe-challenge.vercel.app',
    desc: 'Event viewer for Hack the North with mock authentication and private event gating. Next.js, React contexts, DaisyUI.',
  },
  {
    name: 'Chess++',
    url: 'http://bit.ly/3TXyw0D',
    urlLabel: 'bit.ly/3TXyw0D',
    desc: 'C++ chess engine built from scratch with UML-driven design. Observer, Factory, and MVC patterns with an X11 GUI for real-time move highlighting.',
  },
  {
    name: 'Astroworld',
    url: 'https://bit.ly/3Q5RfBN',
    urlLabel: 'bit.ly/3Q5RfBN',
    desc: 'Java desktop game and jukebox — a high school labour of love. Audio visualisation, a mini game, sorting algorithms, and persistent file storage.',
  },
];

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

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

export default function App() {
  const [active, setActive] = useState('home');

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

      <nav className="mobile-nav">
        <span className="mobile-monogram">F.Q.</span>
        <div className="mobile-nav-links">
          {SECTIONS.map(s => (
            <button key={s} className={active === s ? 'active' : ''} onClick={() => scrollTo(s)}>
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      <main className="main-content">

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
                with a business-minded perspective cultivated through a CS &amp; BBA double degree.
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
                    <span className="exp-location">{exp.location}</span>
                  </div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((h, j) => <li key={j}>{h}</li>)}
                  </ul>
                  <div className="exp-tools">
                    {exp.tools.map(t => <span key={t} className="tool-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          label="Education"
          intro="Double degree in Computer Science and Business Administration — bridging technical depth with strategic thinking."
        >
          <div className="education-list">
            <div className="edu-item">
              <img src="waterloo.png" alt="University of Waterloo" className="edu-logo" />
              <div>
                <h3 className="edu-school">University of Waterloo</h3>
                <p className="edu-degree">Honours Bachelor of Computer Science</p>
                <p className="edu-spec">Artificial Intelligence Specialization</p>
                <p className="edu-period">Expected May 2026</p>
              </div>
            </div>
            <div className="edu-item">
              <img src="laurier.png" alt="Wilfrid Laurier University" className="edu-logo" />
              <div>
                <h3 className="edu-school">Wilfrid Laurier University</h3>
                <p className="edu-degree">Honours Bachelor of Business Administration</p>
                <p className="edu-spec">President's Gold Scholarship</p>
                <p className="edu-period">Expected May 2026</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" label="Projects">
          <div className="projects-list">
            {PROJECTS.map((proj, i) => (
              <div key={i} className="project-item">
                <div className="project-header">
                  <h3 className="project-name">{proj.name}</h3>
                  <a href={proj.url} target="_blank" rel="noreferrer" className="project-link">
                    {proj.urlLabel} ↗
                  </a>
                </div>
                {proj.role && <p className="project-role">{proj.role}</p>}
                <p className="project-desc">{proj.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        <footer className="site-footer">
          <p>Designed &amp; built by Faizaan Qureshi</p>
          <a href="mailto:qfaizaan@gmail.com">Get in touch ↗</a>
        </footer>

      </main>
    </div>
  );
}
