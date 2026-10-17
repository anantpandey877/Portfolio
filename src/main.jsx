import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, AtSign, BookOpen, BriefcaseBusiness,
  Check, Code2, ExternalLink, Github, GraduationCap, Mail, MapPin, Menu,
  Moon, Mountain, Music2, Sun, X, Zap, Boxes, GitBranch, ShieldCheck,
  Terminal, Database, Cloud, Layers3, Cpu, Sparkles, Trophy, CalendarDays
} from 'lucide-react'
import './styles.css'

const projects = [
  {
    number: '01',
    name: 'LeavePilot',
    type: 'Full-stack · Leave management',
    summary: 'A role-based leave management system built around clear approval workflows, leave balances, and traceable request history.',
    problem: 'Leave requests often become difficult to track when balances, approvals, and employee history are spread across disconnected processes.',
    solution: 'Built the backend independently, designing the application around authentication, authorization, leave applications, balance tracking, and role-specific workflows. The frontend was generated with AI and supervised as part of the overall implementation.',
    contribution: 'Backend: independently developed by Anant. Frontend: AI-assisted code generation, supervised and integrated by Anant.',
    stack: ['Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MySQL', 'React', 'CSS', 'Docker', 'Kubernetes'],
    features: ['Registration and authentication', 'Role-based access and authorization', 'Leave applications and approval workflows', 'Leave balance and history', 'Containerization and Kubernetes exploration'],
    links: [
      { label: 'Frontend repository', url: 'https://github.com/anantpandey877/LeavePilot-Frontend' },
      { label: 'Backend repository', url: 'https://github.com/anantpandey877/leavepilot-backend' }
    ],
    note: 'Deployment and feature status should be verified against the current repository before publishing claims about production readiness.'
  },
  {
    number: '02',
    name: 'FindNext',
    type: 'Full-stack · AI-powered job portal',
    summary: 'A Java web application connecting candidate, employer, and administrator workflows with resume parsing integration.',
    problem: 'Recruitment workflows involve job listings, applications, user permissions, and repetitive resume data extraction.',
    solution: 'Developed a Java-based portal with separate workflows for candidates, employers, and administrators, including job lifecycle management, application tracking, session handling, and an Affinda resume-parsing integration.',
    contribution: 'Java backend and application workflows using Servlets, JSP, JDBC, and MySQL, with a browser-based interface.',
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL', 'Apache Tomcat', 'JavaScript', 'HTML', 'CSS', 'Affinda API'],
    features: ['Role-based access for admins, employers, and candidates', 'Job and application lifecycle workflows', 'Session management', 'Resume parsing through Affinda API'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/anantpandey877/FindNext' }],
    note: 'The resume previously reported a 40% reduction in manual screening time. Include that metric only if you can substantiate it.'
  },
  {
    number: '03',
    name: 'Syntax.AI',
    type: 'AI-assisted developer tool',
    summary: 'A code assistance platform designed to help developers debug, refactor, translate, and document code.',
    problem: 'Debugging unfamiliar code, improving readability, translating between languages, and writing documentation can require repetitive manual effort.',
    solution: 'Integrated the Gemini API into a Java web application to support code-focused AI workflows, with a Java backend and REST integration.',
    contribution: 'Backend and API integration work using Java Servlets and MySQL, alongside the web application interface.',
    stack: ['Java', 'Servlets', 'MySQL', 'Apache Tomcat', 'REST APIs', 'Gemini API', 'JavaScript', 'HTML', 'CSS'],
    features: ['AI-assisted code debugging', 'Code refactoring support', 'Multi-language code translation', 'Documentation generation'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/anantpandey877/Syntax.AI' }],
    note: 'Capabilities shown here are based on the project description in the supplied resume; confirm current implementation before treating each as production-ready.'
  },
  {
    number: '04',
    name: 'InventoryDesk',
    type: 'Backend · Inventory management',
    summary: 'A backend-focused inventory management project centered on controlled access and approval-based inventory operations.',
    problem: 'Inventory changes need to be traceable, and sensitive operations should be restricted to authorized users rather than being open to every account.',
    solution: 'Designed the project around user authentication, role-based authorization, administrator account approval, and inventory-manager workflows that can request approval before adding items.',
    contribution: 'Backend project. The frontend is not part of the scope described here.',
    stack: ['Backend APIs', 'Authentication', 'Authorization', 'Inventory workflows'],
    features: ['Administrator and inventory-manager roles', 'Account approval concept', 'Approval-based inventory operations', 'Controlled stock-management workflows'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/anantpandey877/inventorydesk' }],
    note: 'The exact framework, database, endpoints, and implemented status should be confirmed from the repository before publishing a more specific technical claim.'
  },
  {
    number: '05',
    name: 'Portfolio',
    type: 'Personal website · React',
    summary: 'A responsive personal portfolio that presents engineering work through detailed, text-first project case studies.',
    problem: 'A basic list of technologies and repository links does not explain the problem each project solves or the developer’s actual contribution.',
    solution: 'A glassmorphism-inspired portfolio with accessible theme switching, detailed project narratives, a photo modal, and clear links to code repositories.',
    contribution: 'Portfolio design and content specification with AI-assisted implementation.',
    stack: ['React', 'CSS', 'Vite', 'Lucide', 'GitHub Pages'],
    features: ['Aurora Glass visual system', 'Light mode by default and dark-mode toggle', 'Interactive profile-photo modal', 'Responsive layout', 'GitHub project links'],
    links: [{ label: 'GitHub repository', url: 'https://github.com/anantpandey877/Portfolio' }],
    note: 'This portfolio source is prepared as a starting implementation; deploy it after reviewing the content and testing the production build.'
  }
]

const skillGroups = [
  { title: 'Backend engineering', icon: Code2, items: ['Java', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'REST APIs', 'Servlets & JSP', 'JDBC', 'JWT'] },
  { title: 'Data & persistence', icon: Database, items: ['MySQL', 'Relational modelling', 'SQL', 'JPA / Hibernate'] },
  { title: 'Cloud & DevOps', icon: Cloud, items: ['AWS fundamentals', 'Azure', 'Docker', 'Kubernetes', 'AKS', 'GitHub Actions', 'CI/CD concepts'] },
  { title: 'Frontend & tooling', icon: Layers3, items: ['React', 'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub', 'Maven', 'Apache Tomcat'] },
  { title: 'AI integrations', icon: Sparkles, items: ['Google Gemini API', 'Affinda Resume Parsing API', 'AI-assisted development'] },
  { title: 'Computer science', icon: Cpu, items: ['OOP', 'DBMS', 'Data Structures & Algorithms', 'Software design fundamentals'] }
]

function App() {
  const [dark, setDark] = useState(false)
  const [photoOpen, setPhotoOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18)
    const onKey = (event) => {
      if (event.key === 'Escape') { setPhotoOpen(false); setActiveProject(null) }
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', onKey)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  const closeModal = () => { setPhotoOpen(false); setActiveProject(null) }

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="ambient ambient-three" />
      <header className={`topbar glass ${scrolled ? 'topbar-scrolled' : ''}`}>
        <a href="#home" className="brand" aria-label="Anant Pandey home">
          <span className="brand-mark"><Code2 size={18} /></span>
          <span>anant<span className="brand-dot">.</span></span>
        </a>
        <nav className={mobileMenu ? 'nav-links nav-open' : 'nav-links'}>
          <a href="#about" onClick={() => setMobileMenu(false)}>About</a>
          <a href="#experience" onClick={() => setMobileMenu(false)}>Experience</a>
          <a href="#projects" onClick={() => setMobileMenu(false)}>Projects</a>
          <a href="#skills" onClick={() => setMobileMenu(false)}>Skills</a>
          <a href="#education" onClick={() => setMobileMenu(false)}>Education</a>
          <a href="#contact" onClick={() => setMobileMenu(false)}>Contact</a>
        </nav>
        <div className="top-actions">
          <button className="icon-button theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="profile-trigger" onClick={() => setPhotoOpen(true)} aria-label="Open profile photo" title="View profile photo">
            <img src="./assets/anant-profile.jpg" alt="Anant Pandey" />
            <span className="profile-pulse" />
          </button>
          <button className="icon-button menu-toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle navigation">{mobileMenu ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER <span className="eyebrow-line" /> PUNE, INDIA</div>
            <h1>Building useful software.<br /><span className="gradient-text">Understanding what’s underneath.</span></h1>
            <p className="hero-description">I'm Anant Pandey — a software engineering intern at KPIT Technologies, interested in backend systems, full-stack applications, cloud infrastructure, and DevOps.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="./assets/anant-pandey-resume.pdf" download>Download resume <ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={14} /> KPIT Technologies Headquarters · Pune</span>
              <span><GitBranch size={14} /> Backend-first engineering</span>
            </div>
          </div>
          <div className="hero-art reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glass-card glass">
              <div className="card-topline"><span>ENGINEERING LOG</span><span className="live-indicator">● AVAILABLE TO CONNECT</span></div>
              <div className="code-window">
                <div className="window-dots"><i /><i /><i /><span>about-anant.java</span></div>
                <pre><code><span className="code-purple">public class</span> <span className="code-blue">Engineer</span> {'{'}{'\n'}  String focus = <span className="code-green">"Backend"</span>;{'\n'}  String mindset = <span className="code-green">"Keep learning"</span>;{'\n'}  boolean buildWithPurpose = <span className="code-orange">true</span>;{'\n'}{'\n'}  <span className="code-muted">// Understand the problem first.</span>{'\n'}{'}'}</code></pre>
              </div>
              <div className="card-bottomline"><span><Zap size={14} /> Curious by default</span><span>01 / 05</span></div>
            </div>
            <div className="floating-chip chip-one glass"><span className="chip-icon"><ShieldCheck size={16} /></span><span><b>Backend</b><small>Built by me</small></span></div>
            <div className="floating-chip chip-two glass"><span className="chip-icon cyan"><Sparkles size={16} /></span><span><b>AI-assisted</b><small>Used thoughtfully</small></span></div>
            <div className="hero-caption">SYSTEMS · SOFTWARE · CONTINUOUS LEARNING</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
        </section>

        <section id="about" className="section-wrap section-block">
          <div className="section-heading reveal"><div><span className="section-index">01 / ABOUT</span><h2>A little about <span className="gradient-text">how I work.</span></h2></div><p>Curiosity drives the work; clear thinking shapes the solution.</p></div>
          <div className="about-grid">
            <article className="glass about-main reveal">
              <div className="mini-label"><Sparkles size={15} /> THE ENGINEERING SIDE</div>
              <h3>Backend-focused.<br />Product-minded.</h3>
              <p>I enjoy breaking down application problems into understandable pieces: business rules, API contracts, data models, access control, and the behavior users actually need. My project work has included Java web applications, AI API integrations, and a move toward Spring Boot and cloud-native tooling.</p>
              <p>My focus is to build systems that are understandable, maintainable, and useful—not simply to make something run once.</p>
              <div className="about-tags"><span>Problem solving</span><span>API design</span><span>Continuous learning</span></div>
            </article>
            <article className="glass about-personal reveal">
              <div className="mini-label"><BookOpen size={15} /> OUTSIDE THE EDITOR</div>
              <h3>Curious in more than one direction.</h3>
              <div className="interest-list">
                <div><span className="interest-icon"><BookOpen size={18}/></span><span><b>Reading</b><small>My biggest hobby</small></span></div>
                <div><span className="interest-icon"><Music2 size={18}/></span><span><b>Flute</b><small>Currently learning</small></span></div>
                <div><span className="interest-icon"><Trophy size={18}/></span><span><b>Cricket & chess</b><small>Outdoor and indoor games</small></span></div>
                <div><span className="interest-icon"><Mountain size={18}/></span><span><b>Hills & trekking</b><small>Exploring the outdoors</small></span></div>
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="section-wrap section-block">
          <div className="section-heading reveal"><div><span className="section-index">02 / EXPERIENCE</span><h2>Where I'm <span className="gradient-text">learning by doing.</span></h2></div><p>Professional experience and practical exposure, described accurately.</p></div>
          <div className="timeline">
            <article className="timeline-item reveal">
              <div className="timeline-marker"><span /></div>
              <div className="glass timeline-card">
                <div className="timeline-head">
                  <div className="company-lockup kpit-lockup"><div className="brand-emblem">K</div><div><b>KPIT Technologies</b><small>Technology partner for mobility</small></div></div>
                  <span className="date-pill">CURRENT</span>
                </div>
                <h3>Software Engineering Intern</h3>
                <p className="muted-line"><MapPin size={14}/> Headquarters · Pune, India</p>
                <p>Working in a software engineering environment while expanding practical understanding of application development and engineering workflows. Current project details are intentionally kept high-level until public disclosure is confirmed.</p>
                <div className="tag-row"><span>Software Engineering</span><span>Backend Concepts</span><span>Engineering Workflows</span></div>
              </div>
            </article>
            <article className="timeline-item reveal">
              <div className="timeline-marker"><span /></div>
              <div className="glass timeline-card">
                <div className="timeline-head">
                  <div className="company-lockup ramraj-lockup"><img src="./assets/ramraj-tech-logo.png" alt="Ramraj Tech logo"/><div><b>Ramraj Technology Solutions</b><small>Java development internship</small></div></div>
                </div>
                <h3>Java Intern</h3>
                <p>Gained exposure to Java backend development fundamentals, coding and debugging practices, and the structure of application-side logic. This entry is kept focused on foundational experience rather than overstating specific deliverables.</p>
                <div className="tag-row"><span>Java</span><span>Backend Fundamentals</span><span>Debugging</span></div>
              </div>
            </article>
          </div>
        </section>

        <section id="projects" className="section-wrap section-block">
          <div className="section-heading reveal"><div><span className="section-index">03 / SELECTED WORK</span><h2>Problems first.<br /><span className="gradient-text">Code with context.</span></h2></div><p>Explore the purpose, implementation approach, and personal contribution behind each project.</p></div>
          <div className="project-grid">
            {projects.map(project => (
              <article className="glass project-card reveal" key={project.name}>
                <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">{project.stack.slice(0, 4).map(tag => <span key={tag}>{tag}</span>)}{project.stack.length > 4 && <span>+{project.stack.length - 4}</span>}</div>
                <div className="project-card-actions">
                  <button className="text-link" onClick={() => setActiveProject(project)}>Read case study <ArrowUpRight size={16}/></button>
                  <a className="round-link" href={project.links[0].url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} GitHub`}><Github size={17}/></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap section-block">
          <div className="section-heading reveal"><div><span className="section-index">04 / TOOLKIT</span><h2>Tools I use to <span className="gradient-text">build and learn.</span></h2></div><p>Grouped by engineering area; proficiency is not represented by arbitrary percentages.</p></div>
          <div className="skills-grid">
            {skillGroups.map(group => {
              const Icon = group.icon
              return <article className="glass skill-card reveal" key={group.title}><div className="skill-heading"><span className="skill-icon"><Icon size={19}/></span><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>
            })}
          </div>
        </section>

        <section id="education" className="section-wrap section-block">
          <div className="section-heading reveal"><div><span className="section-index">05 / EDUCATION</span><h2>Foundations for <span className="gradient-text">the long run.</span></h2></div><p>Formal learning, certifications, and knowledge shared with peers.</p></div>
          <div className="education-grid">
            <article className="glass education-card reveal">
              <div className="education-top"><div className="college-mark"><GraduationCap size={23}/></div><span className="date-pill">2023 — 2027</span></div>
              <h3>Bachelor of Technology</h3><p className="degree-name">Computer Science and Engineering</p>
              <div className="institution">Technocrats Institute of Technology <span>Bhopal, Madhya Pradesh</span></div>
              <div className="cgpa-block"><span>Current CGPA</span><strong>7.69<span>/10</span></strong></div>
            </article>
            <article className="glass education-card reveal">
              <div className="education-top"><div className="college-mark"><GraduationCap size={23}/></div><span className="date-pill">2023</span></div>
              <h3>Class XII</h3><p className="degree-name">Senior Secondary</p><div className="institution">Govt. Model HS School Ramnagar <span>Maihar, Madhya Pradesh</span></div><div className="cgpa-block"><span>Result</span><strong>85<span>%</span></strong></div>
            </article>
            <article className="glass education-card reveal">
              <div className="education-top"><div className="college-mark"><GraduationCap size={23}/></div><span className="date-pill">2021</span></div>
              <h3>Class X</h3><p className="degree-name">Secondary</p><div className="institution">Govt. Model HS School Ramnagar <span>Maihar, Madhya Pradesh</span></div><div className="cgpa-block"><span>Result</span><strong>95<span>%</span></strong></div>
            </article>
          </div>
          <div className="cert-grid">
            <article className="glass cert-card reveal"><span className="cert-icon"><Check size={18}/></span><div><h3>Career Essentials in Software Development</h3><p>Microsoft · LinkedIn</p></div><span className="cert-label">CERTIFICATION</span></article>
            <article className="glass cert-card reveal"><span className="cert-icon"><Check size={18}/></span><div><h3>Career Essentials in Project Management</h3><p>Microsoft · LinkedIn</p></div><span className="cert-label">CERTIFICATION</span></article>
          </div>
          <div className="community-card glass reveal">
            <div className="community-icon"><BriefcaseBusiness size={20}/></div>
            <div><span className="section-index">COMMUNITY & LEADERSHIP</span><h3>Teaching, sharing, and speaking up.</h3><p>Participated in Java teaching and peer mentorship through the TIT Developer Community, helping peers strengthen Core Java and programming logic. Also hosted college events, developing public-speaking and presentation skills.</p></div>
          </div>
        </section>

        <section id="contact" className="section-wrap section-block contact-section">
          <div className="glass contact-card reveal">
            <div className="contact-copy"><span className="section-index">06 / CONTACT</span><h2>Have a thoughtful problem<br /><span className="gradient-text">to solve?</span></h2><p>I'm interested in learning from good engineering problems, collaborating with others, and building useful software.</p><a className="button button-primary" href="mailto:anantpandey877@gmail.com">Let's connect <ArrowUpRight size={17}/></a></div>
            <div className="contact-details">
              <a href="mailto:anantpandey877@gmail.com"><span className="contact-icon"><Mail size={18}/></span><span><small>EMAIL</small><b>anantpandey877@gmail.com</b></span><ArrowUpRight size={16}/></a>
              <a href="tel:+919589815117"><span className="contact-icon"><AtSign size={18}/></span><span><small>PHONE</small><b>+91 95898 15117</b></span><ArrowUpRight size={16}/></a>
              <a href="https://github.com/anantpandey877" target="_blank" rel="noreferrer"><span className="contact-icon"><Github size={18}/></span><span><small>GITHUB</small><b>github.com/anantpandey877</b></span><ArrowUpRight size={16}/></a>
              <div className="contact-location"><MapPin size={17}/><span>KPIT Technologies Headquarters<br/>Pune, India</span></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a href="#home" className="brand"><span className="brand-mark"><Code2 size={16}/></span><span>anant<span className="brand-dot">.</span></span></a><span>Designed around curiosity. Built with intent.</span><span>© {new Date().getFullYear()} Anant Pandey</span></footer>

      {(photoOpen || activeProject) && <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal() }}>
        {photoOpen && <div className="photo-modal glass-strong" role="dialog" aria-modal="true" aria-label="Anant Pandey profile photo">
          <button className="modal-close icon-button" onClick={closeModal} aria-label="Close profile photo"><X size={20}/></button>
          <div className="photo-modal-image-wrap"><img src="./assets/anant-profile.jpg" alt="Anant Pandey outdoors in a green hillside setting"/></div>
          <div className="photo-modal-caption"><span className="section-index">SOFTWARE ENGINEER</span><h3>Anant Pandey</h3><p>Backend engineering · Full-stack · Cloud & DevOps</p></div>
        </div>}
        {activeProject && <div className="case-modal glass-strong" role="dialog" aria-modal="true" aria-label={`${activeProject.name} case study`}>
          <button className="modal-close icon-button" onClick={closeModal} aria-label="Close case study"><X size={20}/></button>
          <div className="case-modal-header"><span className="section-index">PROJECT CASE STUDY / {activeProject.number}</span><h2>{activeProject.name}</h2><p>{activeProject.type}</p><div className="project-tags">{activeProject.stack.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          <div className="case-body">
            <section><h3>The problem</h3><p>{activeProject.problem}</p></section>
            <section><h3>Approach and solution</h3><p>{activeProject.solution}</p></section>
            <section><h3>Personal contribution</h3><p>{activeProject.contribution}</p></section>
            <section><h3>Key features</h3><ul>{activeProject.features.map(feature => <li key={feature}>{feature}</li>)}</ul></section>
            <div className="case-note"><Sparkles size={16}/><p>{activeProject.note}</p></div>
          </div>
          <div className="case-footer">{activeProject.links.map(link => <a className="button button-primary" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} <ExternalLink size={15}/></a>)}</div>
        </div>}
      </div>}
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
