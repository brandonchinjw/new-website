import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Skills.css'
import './Contact.css'
import Header from './components/Header'
import ResearchProject from './components/ResearchProject'

// Main content component with animations
function PageContent({ children }) {
  const [isExiting, setIsExiting] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    // Reset exit animation on route change
    setIsExiting(false);
  }, [location]);
  
  // This would be triggered before navigation in a real app
  // For demo purposes, we're not using this yet
  const startExitAnimation = () => {
    setIsExiting(true);
    // Return a promise that resolves after animation time
    return new Promise(resolve => setTimeout(resolve, 500));
  };
  
  return (
    <div className={`page-container ${isExiting ? 'page-exit' : ''}`}>
      {children}
    </div>
  );
}

// Home page content
function Home() {
  return (
    <>
      <div className="welcome-section">
        <div className="welcome-content">
          <div className="welcome-box">
            <span data-text="Hello World!" className="text glitch">Hello World!</span>
          </div>
          <p className="welcome-subtext">
            I'm <span className="name-highlight">Brandon Chin</span>, a senior majoring in Electrical Engineering and Computer Science at the University of California Berkeley. I am a proficient software engineer with a keen analytical mind and an eye for design. I strive to create accessible, dynamic, and interactive products!
          </p>
          <p className="welcome-subtext">
            Get to know a bit more about my <a href="/experience" data-text="work experience" className="page-link text glitch">work experience</a>, my <a href="/research" data-text="research projects" className="page-link text glitch">research projects</a>, and my <a href="/skills" data-text="skillset" className="page-link text glitch">skillset</a>.
          </p>
        </div>
        <div className="headshot-container">
          <img src="/headshot.png" alt="Brandon Chin" className="headshot" />
        </div>
      </div>
      
      {/* Added Focus Areas Header */}
      <div className="focus-areas-header">
        <h2 className="focus-areas-title">Engineering Impactful Solutions</h2>
        <p className="focus-areas-description">
          Leveraging a strong foundation in engineering and a keen eye for user experience, 
          I specialize in building innovative solutions across the full stack. 
          Below is a quick synopsis of my skills and experiences.
        </p>
      </div>
      
      <div className="feature-section">
        <div className="feature-card">
          <h3>Software Engineering</h3>
          <p>Experienced in full-stack development with a focus on creating scalable and maintainable solutions. Proficient in multiple programming languages and frameworks.</p>
        </div>
        <div className="feature-card">
          <h3>Research Projects</h3>
          <p>Conducted research at the intersection of technology and human-computer interaction, developing innovative approaches to solve complex problems.</p>
        </div>
        <div className="feature-card">
          <h3>Technical Skills</h3>
          <p>Expertise in software architecture, algorithm design, and data structures. Comfortable working with diverse technologies across different domains.</p>
        </div>
      </div>
    </>
  );
}

// Placeholder pages for other routes
function Experience() {
  // Career data for timeline
  const careerItems = [
    {
      title: "Full Stack Developer Intern",
      company: "Backlinker.AI",
      location: "San Francisco, CA",
      period: "Sep '24 - Dec '24",
      description: "Increased customer growth by 22% within a month by implementing key frontend design features such as utility functions and website routes using Typescript, NextJS, and HTML, enhancing user experience and engagement. Leveraged machine learning, Retool, and Python to implement automated backend pipelines through LLM integrations and workflow automation frameworks, resulting in a 17% increase in workflow productivity. Led PostgreSQL database optimization, website enhancements, and seamless pipeline integration, improving data retrieval times and system scalability.",
      logoSrc: "/backlinker.png",
      color: "#3498DB",
      highlightedPhrases: [
        "Increased customer growth by 22% within a month",
        "17% increase in workflow productivity",
        "improving data retrieval times and system scalability"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Enlighten Labs",
      location: "San Francisco, CA",
      period: "Sep '24 - Dec '24",
      description: "Developed the frontend website from scratch (enlightenlabs.io) using Next.js, TypeScript, and Tailwind CSS, which was presented at several funder events. Set up registration and login with OAuth and integrated our large vision model library from MongoDB, resulting in 150+ user registrations. Wrote scraping scripts and language model generation ideas for our LLM training data.",
      logoSrc: "/enlightenLabs.png",
      color: "#8A4FFF",
      highlightedPhrases: [
        "which was presented at several funder events",
        "resulting in 150+ user registrations",
        "wrote scraping scripts and language model generation ideas"
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Nexa",
      location: "Berkeley, CA",
      period: "Jan '24 - May '24",
      description: "Adapted NeMo Guardrails for LLM protection against vulnerabilities, decreasing daily security flags by 31%. Architected and deployed scalable frontend systems, optimizing folder structures, design components, and API gateways using React Native and JavaScript, improving application efficiency and maintainability. Led a team of 3 engineers to develop and deploy a personalized recommendation system using CNNs, Keras, and TensorFlow, enhancing user engagement through tailored content delivery. Introduced app-wide multimodal interaction through fine-tuning audio generation LLMs using StyleTTS models and custom datasets, increasing user accessibility and interactivity.",
      logoSrc: "/nexa.png",
      color: "#FF6B6B",
      highlightedPhrases: [
        "decreasing daily security flags by 31%",
        "improving application efficiency and maintainability",
        "Led a team of 3 engineers",
        "Introduced app-wide multimodal interaction"
      ]
    },
    {
      title: "AI Research Scientist Intern",
      company: "Vector InfoTech",
      location: "Singapore (Remote)",
      period: "May '23 - August '23",
      description: "Collected customer data and performed text embedding for fine-tuning customer experience models, expanding our model's reach and specificity. Developed matching algorithms for personalized recommendations in advertising and products. Logged developmental user studies and validated testing models for deployment, evaluating 350+ user experiences.",
      logoSrc: "/vectorInfotech.png",
      color: "#0077B6",
      highlightedPhrases: [
        "expanding our model's reach and specificity",
        "Developed matching algorithms",
        "evaluating 350+ user experiences"
      ]
    },
    {
      title: "Data Analytics Intern",
      company: "Maxis",
      location: "Kuala Lumpur, Malaysia",
      period: "May '22 - August '22",
      description: "Analyzed and cleaned large customer datasets using SQL and Google Sheets into presentable dashboards for company insights. Increased international outreach and demographic targeting by 7% through customer analysis and product strategy. Developed scripts for fraud detection and customer churn predictions, successfully predicting trends in product growth and customer retention.",
      logoSrc: "/maxis.png",
      color: "#46A82C",
      highlightedPhrases: [
        "presentable dashboards for company insights",
        "Increased international outreach and demographic targeting by 7%",
        "successfully predicting trends in product growth and customer retention"
      ]
    }
  ];

  // State for current index and visible count
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // Always show 1 card
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setIsMobileOrTablet(true);
      } else {
        setIsMobileOrTablet(false);
      }
      // Always show 1 card regardless of screen size
      setVisibleCount(1);
    };

    // Set initial sizes
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < careerItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, careerItems.length]);

  const jumpToIndex = useCallback((index) => {
    // Ensure index is within bounds
    const safeIndex = Math.min(Math.max(0, index), careerItems.length - 1);
    setCurrentIndex(safeIndex);
  }, [careerItems.length]);

  // Calculate visible career items - always just the current one
  const visibleCareerItems = useMemo(() => {
    return [careerItems[currentIndex]];
  }, [careerItems, currentIndex]);

  // Calculate offset for career stations only
  const careerStationsOffset = useMemo(() => {
    return { transform: `translateX(-${currentIndex * 100}%)` };
  }, [currentIndex]);

  // Years for milestones
  const years = useMemo(() => {
    return careerItems.map(item => item.period.split(' - ')[0]);
  }, [careerItems]);

  return (
    <div className="page-content">
      <h2 className="page-title">Work Experience</h2>
      
      {/* Added Experience Intro Section */}
      <div className="experience-intro-section">
        <div className="experience-intro-content">
          <h3 className="experience-intro-heading">Driving Growth & Innovation</h3>
          <p className="experience-intro-text">
            Driven by a commitment to <span className="highlight-text">technical excellence</span>, my professional journey focuses 
            on <span className="highlight-text">software engineering and full-stack development</span>. I design, build, and scale 
            applications across the stack, utilizing expertise in modern front-end frameworks, back-end services, 
            and data systems to deliver impactful and innovative solutions.
          </p>
        </div>
        <div className="experience-intro-graphic">
          {/* Placeholder graphics - customize as needed */}
          <div className="graphic-briefcase"></div>
          <div className="graphic-arrow-up"></div>
          <div className="graphic-chart"></div>
        </div>
      </div>
      
      <div className="timeline-journey">
        {/* Clean horizontal timeline */}
        <div className="horizontal-timeline">
          <div className="timeline-track"></div>
          {careerItems.map((item, index) => {
            // For desktop: handle special positioning for first and last items
            let positionStyle = {};
            
            // Only apply percentage positioning on desktop
            if (!isMobileOrTablet) {
              if (index === 0) {
                // First item
                positionStyle.left = careerItems.length === 1 ? '50%' : '0%';
              } else if (index === careerItems.length - 1) {
                // Last item
                positionStyle.left = '100%';
              } else {
                // Items in between
                positionStyle.left = `${index * (100 / (careerItems.length - 1))}%`;
              }
            }
            
            return (
              <button
                key={index}
                className={`timeline-node ${index === currentIndex ? 'active' : ''} ${index === 0 ? 'first-node' : ''} ${index === careerItems.length - 1 ? 'last-node' : ''}`}
                onClick={() => jumpToIndex(index)}
                aria-label={`Go to ${item.period}`}
                style={positionStyle}
              >
                <span className="timeline-date">{item.period.split(' - ')[0]}</span>
              </button>
            );
          })}
          </div>

        {/* Career stations container */}
        <div className="career-stations-container full-width">
          <div className="career-stations" style={careerStationsOffset}>
            {careerItems.map((item, index) => (
              <div 
                key={index} 
                className={`career-station ${index === currentIndex ? 'visible' : ''}`}
                style={{ flex: '0 0 100%', maxWidth: '100%' }}
              >
                <div className="station-card" style={{ 
                  borderTopColor: item.color,
                  ['--card-color']: item.color
                }}>
                  <div className="station-logo">
                    <img src={item.logoSrc} alt={`${item.company} logo`} />
            </div>
                  <div className="station-content">
                    <h4 className="station-title">{item.title}</h4>
                    <h3 className="station-company" style={{ color: item.color }}>
                      {item.company}
                    </h3>
                    <div className="card-meta-info">
                      <div className="station-location">{item.location}</div>
                      <div className="station-period">{item.period}</div>
            </div>
                    <ul className="station-bullet-list">
                      {item.description.split('. ')
                        .filter(point => point.trim().length > 0)
                        .map((point, i) => {
                          // Clean up the text and ensure proper formatting
                          let formattedPoint = point.trim();
                          
                          // Ensure the first letter is capitalized
                          formattedPoint = formattedPoint.charAt(0).toUpperCase() + formattedPoint.slice(1);
                          
                          // Add period if missing
                          if (!formattedPoint.endsWith('.')) {
                            formattedPoint += '.';
                          }
                          
                          // Handle highlighting if this item has highlighted phrases
                          let content = formattedPoint;
                          if (item.highlightedPhrases) {
                            item.highlightedPhrases.forEach(phrase => {
                              // Escape special regex characters then create a regex for case insensitive matching
                              const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                              const regex = new RegExp(`(${escapedPhrase})`, 'i');
                              if (content.match(regex)) {
                                content = content.replace(regex, '<strong>$1</strong>');
                              }
                            });
                            
                            // Return with dangerouslySetInnerHTML for the HTML content
                            return (
                              <li key={i} className="station-bullet-item" 
                                  dangerouslySetInnerHTML={{__html: content}} />
                            );
                          }
                          
                          // Regular content without highlighting
                          return (
                            <li key={i} className="station-bullet-item">
                              {formattedPoint}
                            </li>
                          );
                        })}
                    </ul>
            </div>
            </div>
          </div>
            ))}
          </div>
        </div>
        
        {/* Enhanced navigation indicators */}
        {careerItems.length > 1 && (
          <div className="journey-navigation">
            {/* Always show Previous button, but disable when needed */}
            <button 
              className="nav-pill prev-pill" 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous career item"
            >
              Previous
            </button>
            
            {/* Dots */}
            <div className="journey-indicators">
              {careerItems.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => jumpToIndex(index)}
                  aria-label={`Jump to slide ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Always show Next button, but disable when needed */}
            <button 
              className="nav-pill next-pill" 
              onClick={handleNext}
              disabled={currentIndex >= careerItems.length - 1}
              aria-label="Next career item"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Research() {
  // Research project data
  const researchProjects = [
    {
      title: "Applying the Gricean Maxims to a Human-LLM Interaction Cycle: Design Insights from a Participatory Approach",
      status: "Accepted to CHI 2025 (32.8% acceptance rate)",
      location: "KAIST Interaction Lab",
      abstract: "While large language models (LLMs) are increasingly used to assist users in various tasks through natural language interactions, these interactions often fall short due to LLMs' limited ability to infer contextual nuances and user intentions, unlike humans. To address this challenge, we draw inspiration from the Gricean Maxims—human communication theory that suggests principles of effective communication—and aim to derive design insights for enhancing human-AI interactions (HAI). Through participatory design workshops with communication experts, designers, and end-users, we identified ways to apply these maxims across the stages of the HAI cycle. Our findings include reinterpreted maxims tailored to human-LLM contexts and nine actionable design considerations categorized by interaction stage. These insights provide a concrete framework for designing more cooperative and user-centered LLM-based systems, bridging theoretical foundations in communication with practical applications in HAI.",
      highlights: [
        "Conducted four design workshops on communication deficiencies in human-LLM interactions, <strong>denoting nine design considerations lacking in the Human-AI Interaction Cycle</strong>.",
        "<strong>Prototyped design interface</strong> for incorporation of improved LLM interaction using React, Python, and Figma."
      ],
      pdfUrl: "/chi2025.pdf",
      color: "#4e8cff"
    },
    {
      title: "IntentFlow: Interactive Support for Communicating Intent with LLMs in Writing Tasks",
      status: "Submitted, under review at UIST '25",
      location: "KAIST Interaction Lab",
      abstract: "While large language models (LLMs) have become widely adopted for writing assistance, users often struggle to communicate their nuanced and evolving intents through linear, prompt-based interactions. In particular, intents—low-level and specific strategies to achieve a high-level task goal—are often vague, fluid, or even subconscious, making them difficult to express and refine through typical chat interfaces. To address this, we present IntenTune, a system designed to help users externalize, adjust, and reflect on their intents throughout LLM-assisted writing. IntenTune extracts users' high-level goals and fine-grained intents from natural language prompts and presents them as discrete, manipulable components in the interface. These components serve as interactive handles for users to revise, remove, or expand their intents—either through direct manipulation or follow-up targeted prompting. The system makes the impact of each intent on the output transparent by visually linking intent components to specific output segments. In a within-subjects study (N=12), participants using IntenTune expressed more diverse intents, engaged more in adjusting and removing them rather than correcting them, and produced outputs that better aligned with their evolving intents compared to a baseline chat-based interface. These findings highlight that explicit and editable representations of intent not only improve intent-output alignment but also enable new interactions—such as intent removal and reuse—that expand the design space for intent communication in LLM-based writing tools.",
      highlights: [
        "Utilized multi-agent framework to handle user queries and <strong>improve intent alignment to 90% success rate</strong>.",
        "<strong>Deployed an accessible and interactive interface</strong> with subtask decomposition, characteristic tuning, and output refinement using React, Python, & Flask.",
        "Conducted user studies and technical evaluation, <strong>achieving ~30% increased user satisfaction and intent alignment</strong> in comparison to ChatGPT interface."
      ],
      pdfUrl: "/uist2025.pdf",
      demoUrl: "http://143.248.48.96:7887/system",
      color: "#9333EA" // Different color for visual distinction
    },
    {
      title: "Improving Collaboration by Learning Communication Strategies",
      status: "Expected to submit to CSCW '25 (May 13th 2025)",
      location: "UC Berkeley Haas School of Business",
      abstract: "The study explores the dynamics of collaboration and decision-making within a virtual game environment. Participants engage in a single-player game designed to simulate real-life strategic planning, with the objective of collecting items while minimizing the cost. The research is conducted in two phases. The first phase involves collecting behavioral data as players navigate the game under different conditions: without advice, with generic communication options, and with explained communication options. This phase aims to understand how different types of communication influence decision-making. In the second phase, we analyze and compare players' strategies to the A* search optimizer, aiming to provide insights into human strategic thinking and its alignment with algorithmic efficiency. Additionally, the study probes into participants' collaboration preferences, offering a deeper understanding of how individual strategies and communication impact team dynamics and performance. The ultimate goal is to enhance collaboration by learning and applying effective communication strategies in virtual settings.",
      highlights: [
        "Explored how humans make decisions and how AI can improve human performance through explanations, <strong>improving sequential decision making through personalized recommendations by 8%</strong>.",
        "<strong>Designed a specialized experiment</strong> to understand sequential decision making using React and Python.",
        "Analyzed differences in performance between AI intervention techniques, <strong>improving collaboration by 32%</strong>."
      ],
      workInProgress: true,
      expectedSubmission: "May 13th 2025",
      color: "#10B981" // Green color for third project
    }
  ];

  return (
    <div className="page-content">
      <h2 className="page-title">Research Projects</h2>
      
      <div className="research-container">
        <div className="research-intro-section">
          <div className="research-intro-content">
            <h3 className="research-intro-heading">Expanding the Boundaries of Human-AI Interaction</h3>
            <p className="research-intro-text">
              My research explores innovative approaches to <span className="highlight-text">human-computer interaction</span>, 
              with a special focus on designing more intuitive and effective interfaces between 
              <span className="highlight-text"> humans and AI systems</span>. I'm particularly interested in how 
              language models can be made more responsive to human intent and communication patterns.
            </p>
          </div>
          <div className="research-intro-graphic">
            <div className="graphic-circle"></div>
            <div className="graphic-line"></div>
            <div className="graphic-square"></div>
          </div>
        </div>
        
        <div className="research-projects-grid">
          {researchProjects.map((project, index) => (
            <ResearchProject key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Skills() {
  const [skillsInView, setSkillsInView] = useState(false);
  const [additionalSkillsDelay, setAdditionalSkillsDelay] = useState({});
  const skillsRef = useRef(null);
  const additionalSkillsRef = useRef(null);

  const mainSkills = [
    {
      name: "JavaScript",
      percentage: 95,
      background: "linear-gradient(90deg, #F7DF1E, #EAD41C)",
      icon: "/javascript.webp"
    },
    {
      name: "TypeScript",
      percentage: 90,
      background: "linear-gradient(90deg, #3178C6, #5499E8)",
      icon: "/typescript.png"
    },
    {
      name: "CSS",
      percentage: 90,
      background: "linear-gradient(90deg, #264DE4, #2965F1)",
      icon: "/css.png"
    },
    {
      name: "Java",
      percentage: 70,
      background: "linear-gradient(90deg, #ED8B00, #F89820)",
      icon: "/java.png"
    },
    {
      name: "Python",
      percentage: 96,
      background: "linear-gradient(90deg, #3776AB, #74a7d0)",
      icon: "/python.webp"
    },
    {
      name: "Next.js",
      percentage: 80,
      background: "linear-gradient(90deg, #000000, #444444)",
      icon: "/nextjs.png"
    },
    {
      name: "React",
      percentage: 85,
      background: "linear-gradient(90deg, #61DAFB, #00C5E8)",
      icon: "/reacticon.png"
    }
  ];

  const additionalSkills = [
    { name: "C", icon: "/cicon.webp" },
    { name: "Node.js", icon: "/nodejs.png" },
    { name: "MongoDB", icon: "/mongodb.png" },
    { name: "Git", icon: "/giticon.png" },
    { name: "Docker", icon: "/dockericon.png" },
    { name: "AWS", icon: "/awsicon.webp" },
    { name: "Figma", icon: "/figmaicon.png" },
    { name: "PyTorch", icon: "/pytorchicon.png" },
    { name: "Firebase", icon: "/firebaseicon.webp" },
    { name: "GCP", icon: "/gcpicon.png" },
    { name: "SQL", icon: "/sqlicon2.png" },
    { name: "Pandas", icon: "/pandasicon.ico" }
  ];

  // Calculate animation delays for the additional skills icons
  useEffect(() => {
    const delays = {};
    additionalSkills.forEach((_, index) => {
      delays[index] = 0.05 * index; // 50ms delay increment for each icon
    });
    setAdditionalSkillsDelay(delays);
  }, []);

  // Set up Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSkillsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div className="page-content">
      <h2 className="page-title">Skill Set</h2>
      
      <div className="skills-intro-section">
        <div className="skills-intro-content">
          <h3 className="skills-intro-heading">Building with Precision & Purpose</h3>
          <p className="skills-intro-text">
            My technical journey spans <span className="highlight-text">frontend and backend development</span>, 
            with a strong foundation in modern programming languages and frameworks. I focus on building 
            <span className="highlight-text"> scalable, maintainable solutions</span> that combine performance 
            with exceptional user experience.
          </p>
        </div>
        <div className="skills-intro-graphic">
          <div className="graphic-code-bracket"></div>
          <div className="graphic-gear"></div>
          <div className="graphic-chip"></div>
        </div>
      </div>
      
      <div 
        ref={skillsRef} 
        className={`main-skills-section ${skillsInView ? 'in-view' : ''}`}
      >
        <div className="section-header">
          <div className="section-header-content">
            <h3 className="section-subtitle">Core Technologies</h3>
            <img src="/coretech.png" alt="Core Technologies Icon" className="header-icon" />
          </div>
        </div>
        <div className="section-content">
          
          <div className="skill-bars-container">
            {mainSkills.map((skill, index) => (
              <div className="skill-bar-wrapper" key={index}>
                <div className="skill-info">
                  <img src={skill.icon} alt={`${skill.name} icon`} className="skill-language-icon" />
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
                <div className="skill-bar-bg">
                  <div 
                    className="skill-bar-fill" 
                    style={{ 
                      '--target-width': `${skill.percentage}%`,
                      background: skill.background,
                      animationDelay: `${0.1 * index}s`
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        ref={additionalSkillsRef} 
        className="additional-skills-section"
      >
        <div className="section-header">
          <div className="section-header-content">
            <h3 className="section-subtitle">Supporting Technologies</h3>
            <img src="/supportingtech.png" alt="Supporting Technologies Icon" className="header-icon" />
          </div>
        </div>
        <div className="section-content">
          
          <div className="skills-grid">
            {additionalSkills.map((skill, index) => (
              <div 
                key={index} 
                className="skill-icon-card" 
                style={{ 
                  animationDelay: `${additionalSkillsDelay[index]}s` 
                }}
              >
                <div className="skill-icon-wrapper">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="skill-icon" 
                  />
                </div>
                <span className="skill-icon-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page Component
function Contact() {
  return (
    <div className="page-content">
      <h2 className="page-title">Get In Touch</h2>

      <div className="contact-container">
        <div className="contact-intro">
          <img 
            src="/contactmeblueicon.png" 
            alt="Contact illustration" 
            className="contact-main-icon" 
          />
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Feel free to reach out using any of the methods below!
          </p>
        </div>

        <div className="contact-grid">
          {/* LinkedIn Card */}
          <div className="contact-card">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="contact-icon" />
            <h3>LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/brandoncjw25/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              linkedin.com/in/brandoncjw25
            </a>
          </div>

          {/* GitHub Card */}
          <div className="contact-card">
            <img src="/github-icon.png" alt="GitHub" className="contact-icon" />
            <h3>GitHub</h3>
            <a 
              href="https://github.com/brandonchinjw" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"
            >
              github.com/brandonchinjw
            </a>
          </div>

          {/* Email Card */}
          <div className="contact-card">
            <img src="/email-icon.png" alt="Email" className="contact-icon" />
            <h3>Email</h3>
            <a 
              href="mailto:brandoncjw@hkn.eecs.berkeley.edu" 
              className="contact-link"
            >
              brandoncjw@hkn.eecs.berkeley.edu
            </a>
          </div>

          {/* Phone Card */}
          <div className="contact-card">
            <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
            <h3>Phone</h3>
            <a href="tel:5107105292" className="contact-link">
              (510) 710-5292
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          <Route path="/" element={<PageContent><Home /></PageContent>} />
          <Route path="/experience" element={<PageContent><Experience /></PageContent>} />
          <Route path="/research" element={<PageContent><Research /></PageContent>} />
          <Route path="/skills" element={<PageContent><Skills /></PageContent>} />
          <Route path="/contact" element={<PageContent><Contact /></PageContent>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
