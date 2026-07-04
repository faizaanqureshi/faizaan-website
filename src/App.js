import { useEffect, useRef, useState } from 'react';
import './App.css';

const EXPERIENCE = [
  {
    logo: 'distyl.jpeg',
    role: 'AI Engineer',
    company: 'Distyl',
    period: 'Aug 2026 — Present',
    location: 'New York, NY',
    desc: 'Joining as an AI Engineer, building applied AI solutions for enterprise clients.',
    current: true,
  },
  {
    logo: 'casca.jpeg',
    role: 'Software Engineer',
    company: 'Casca',
    period: 'Feb 2025 — Jan 2026',
    location: 'San Francisco, CA',
    desc: 'Built AI-powered CRA compliance tooling and geospatial infrastructure for SBA banks.',
    highlights: [
      'Owned CRA compliance reporting for 5–10 large SBA banks — cut report creation from fully manual builds to ~10 minutes via a metadata-driven builder with joins, filters, aggregations, and exports.',
      'Built an AI translation layer enabling automatic report generation from natural language, images, and external artifacts. Forward-deployed at Live Oak Bank, iterating directly with bankers.',
      'Delivered sub-second CRA geospatial mapping via an offline pipeline (Census TIGER → LMI enrichment → MBTiles → S3/Mapbox) with SOX-style immutability enforced by end-to-end Playwright tests.',
    ],
    tools: ['TypeScript', 'tRPC', 'Prisma', 'PostgreSQL', 'Next.js', 'Mapbox', 'Playwright', 'AWS'],
  },
  {
    logo: 'omers.png',
    role: 'Full-Stack Software Engineer Intern',
    company: 'OMERS',
    period: 'Sep 2024 — Dec 2024',
    location: 'Toronto, ON',
    desc: "Contributed to the myOMERS pension dashboard redesign, OMERS’ primary member-facing platform.",
    highlights: [
      "Contributed to the myOMERS pension dashboard redesign — OMERS’ primary member-facing platform — building UI components (banners, pension summaries, timelines) integrated with Nest.js APIs via tRPC.",
    ],
    tools: ['Next.js', 'TypeScript', 'Tailwind', 'tRPC', 'Nest.js'],
  },
  {
    logo: 'interac.png',
    role: 'Back-End Software Developer Intern',
    company: 'Interac Corp.',
    period: 'Jan 2024 — Apr 2024',
    location: 'Toronto, ON',
    desc: 'Strengthened test coverage and security across critical payment microservices.',
    highlights: [
      'Owned test quality across 4 critical payment microservices — lifted automated coverage from 40% → 80% and reduced production defects by 30%.',
      'Implemented token-based CIAM access controls in Spring Boot APIs for fraud history retrieval, supporting PCI DSS compliance.',
    ],
    tools: ['Java', 'Spring Boot', 'JUnit', 'Mockito', 'SonarQube'],
  },
  {
    logo: 'omers.png',
    role: 'Back-End Software Engineer Intern',
    company: 'OMERS',
    period: 'Jan 2023 — Apr 2023',
    location: 'Toronto, ON',
    desc: "Built Spring Boot APIs powering OMERS’ internal pension processing platform.",
    highlights: [
      "Built Spring Boot APIs for Donna, OMERS’ internal pension processing platform — handling fund transfers, account state changes, and business rules with 80%+ unit test coverage.",
    ],
    tools: ['Java', 'Spring Boot', 'PostgreSQL', 'MySQL', 'JUnit', 'Mockito'],
  },
];

const EDUCATION = [
  {
    logo: 'waterloo.png',
    school: 'University of Waterloo',
    degree: 'Honours Bachelor of Computer Science',
    period: 'Sep 2021 — Jun 2026',
  },
  {
    logo: 'laurier.png',
    school: 'Wilfrid Laurier University',
    degree: 'Honours Bachelor of Business Administration',
    period: 'Sep 2021 — Jun 2026',
  },
];

function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function App() {
  const expRef = useFadeIn();
  const eduRef = useFadeIn();
  const personalRef = useFadeIn();
  const [openIndex, setOpenIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="App">
      <section className="hero">
        <img src="profile.jpg" alt="Faizaan Qureshi" className="portrait" />
        <h1 className="name">Faizaan Qureshi</h1>
        <div className="name-rule">
          <span />
          <i />
          <span />
        </div>
        <p className="title">Software Engineer</p>
        <p className="headline">Some things are worth doing properly, or not at all.</p>
        <div className="social-pill">
          <a href="https://linkedin.com/in/faizaan-qureshi" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="linkedin.svg" alt="" />
          </a>
          <span className="social-divider" />
          <a href="https://github.com/faizaanqureshi" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src="github.svg" alt="" />
          </a>
          <span className="social-divider" />
          <a href="Faizaan Qureshi Resume.pdf" target="_blank" rel="noreferrer" className="social-resume">
            Résumé
          </a>
        </div>

        <button
          className={`scroll-cue${scrolled ? ' scroll-cue-hidden' : ''}`}
          aria-label="Scroll down"
          onClick={() => document.querySelector('.experience')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="scroll-cue-arrow" />
        </button>
      </section>

      <section className="experience fade-in" ref={expRef}>
        <div className="section-label">Experience</div>
        <div className="experience-list">
          {EXPERIENCE.map((exp, i) => {
            const expandable = Boolean(exp.highlights);
            const open = openIndex === i;
            return (
              <div
                className={`exp-item${expandable ? ' expandable' : ''}${open ? ' open' : ''}${exp.current ? ' current' : ''}`}
                key={i}
                onClick={() => expandable && setOpenIndex(open ? null : i)}
              >
                <img src={exp.logo} alt={exp.company} className="exp-logo" />
                <div className="exp-text">
                  <div className="exp-heading">
                    <h3 className="exp-role">
                      {exp.role}
                      {exp.current && <span className="current-badge">Current</span>}
                    </h3>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <p className="exp-company">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="exp-desc">{exp.desc}</p>

                  {expandable && (
                    <div className="exp-more">
                      <div className="exp-more-inner">
                        <ul className="exp-highlights">
                          {exp.highlights.map((h, j) => (
                            <li key={j}>{h}</li>
                          ))}
                        </ul>
                        <div className="exp-tools">
                          {exp.tools.map((t) => (
                            <span className="exp-tool" key={t}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="education fade-in" ref={eduRef}>
        <div className="section-label">Education</div>
        <div className="education-list">
          {EDUCATION.map((edu) => (
            <div className="edu-item" key={edu.school}>
              <img src={edu.logo} alt={edu.school} className="edu-logo" />
              <div className="edu-text">
                <div className="edu-heading">
                  <h3 className="edu-school">{edu.school}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="edu-graduated">Graduated June 2026</p>
      </section>

      <section className="personal fade-in" ref={personalRef}>
        <div className="section-label">Beyond the Resume</div>

        <div className="personal-quotes">
          <div className="currently-item">
            <span className="currently-label">Toronto, Always</span>
            <p className="currently-value personal-text">
              Toronto-raised, and predictably biased about it — best city, best country, the ’19 Raptors run as supporting evidence.
            </p>
          </div>

          <span className="personal-divider" />

          <div className="currently-item">
            <span className="currently-label">Outside of Work</span>
            <p className="currently-value personal-text">
              Good food, the gym more often than I’ll admit, and a habit of driving somewhere with no plan.
            </p>
          </div>
        </div>

        <div className="personal-duo">
          <div className="currently-item">
            <span className="currently-label">Reading</span>
            <span className="currently-value">The Count of Monte Cristo</span>
            <span className="currently-sub">Alexandre Dumas</span>
          </div>

          <span className="personal-duo-divider" />

          <div className="currently-item currently-song">
            <span className="currently-label">On Repeat</span>
            <div className="record-player" onClick={togglePlay} role="button" aria-label="Play Plot Twist">
              <div className={`record${isPlaying ? ' spinning' : ''}`}>
                <img src="iceman.jpeg" alt="" className="record-label" />
              </div>
              <span className="record-icon">{isPlaying ? '❚❚' : '▶'}</span>
            </div>
            <span className="currently-value">Plot Twist</span>
            <span className="currently-sub">Drake</span>
            <audio ref={audioRef} src="plot-twist.mp3" onEnded={() => setIsPlaying(false)} />
          </div>
        </div>
      </section>

      <section className="closing">
        <p className="closing-text">Always up for a good conversation.</p>
        <a href="mailto:qfaizaan@gmail.com" className="closing-email">
          qfaizaan@gmail.com
        </a>
      </section>

      <p className="credit">Designed &amp; built by Faizaan Qureshi</p>
    </div>
  );
}

export default App;
