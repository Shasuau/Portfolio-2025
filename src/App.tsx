import React, { useState, useEffect, useRef } from 'react';
import { Shield, Code, Terminal, Server, Lock, Cpu, Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight, Network, Database, Bot, Blocks, Cloud, Bug, Send } from 'lucide-react';

function App() {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showEnterPrompt, setShowEnterPrompt] = useState(false);
  const securityRef = useRef<HTMLDivElement>(null);
  const developmentRef = useRef<HTMLDivElement>(null);
  const infrastructureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show enter prompt after typing animation (3.5s)
    const promptTimer = setTimeout(() => {
      setShowEnterPrompt(true);
    }, 3500);

    return () => {
      clearTimeout(promptTimer);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('from-right')) {
              entry.target.classList.add('animate-slide-right');
              entry.target.classList.remove('animate-slide-right-reverse');
            } else {
              entry.target.classList.add('animate-slide-left');
              entry.target.classList.remove('animate-slide-left-reverse');
            }
          } else {
            if (entry.target.classList.contains('from-right')) {
              entry.target.classList.remove('animate-slide-right');
              entry.target.classList.add('animate-slide-right-reverse');
            } else {
              entry.target.classList.remove('animate-slide-left');
              entry.target.classList.add('animate-slide-left-reverse');
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px'
      }
    );

    const elements = [securityRef.current, developmentRef.current, infrastructureRef.current];
    elements.forEach((el) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => {
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  const projects = [
    {
      title: "Security Scanner",
      description: "Automated vulnerability scanner for web applications",
      icon: Shield,
      link: "#"
    },
    {
      title: "Secure API Framework",
      description: "Zero-trust API framework with built-in security features",
      icon: Server,
      link: "#"
    },
    {
      title: "Threat Detection System",
      description: "ML-powered system for detecting security threats",
      icon: Cpu,
      link: "#"
    },
    {
      title: "Network Monitor",
      description: "Real-time network traffic analysis and intrusion detection",
      icon: Network,
      link: "#"
    },
    {
      title: "Secure Database Layer",
      description: "Encrypted database wrapper with access control",
      icon: Database,
      link: "#"
    },
    {
      title: "Security Bot",
      description: "Automated security response and remediation system",
      icon: Bot,
      link: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsToShow = 3;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    window.location.href = `mailto:brandonsharp003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsToShow >= projects.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - projectsToShow : prevIndex - 1
    );
  };

  const visibleProjects = [...projects.slice(currentIndex)]
    .concat(projects.slice(0, currentIndex))
    .slice(0, projectsToShow);

  return (
    <>
      {showTerminal && (
        <div className={`terminal-overlay ${!showTerminal ? 'fade-out' : ''}`}>
          <div className="text-cyan-400 mb-4">
            <p className="terminal-text">Initializing secure connection...</p>
          </div>
          {showEnterPrompt && (
            <button
              onClick={() => setShowTerminal(false)}
              className="mt-4 px-6 py-2 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/30 transition-all duration-300 animate-pulse"
            >
              Click to continue
            </button>
          )}
        </div>
      )}

      <div className="min-h-screen bg-gray-900 text-gray-100" style={{ visibility: showTerminal ? 'hidden' : 'visible' }}>
        <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-auto backdrop-blur-md bg-white/10 rounded-full border border-white/20 shadow-lg shadow-black/5">
          <div className="px-3 md:px-6 py-2">
            <ul className="flex items-center justify-between md:gap-4 text-xs md:text-sm">
              <li>
                <a 
                  href="#about" 
                  className="px-2 py-1 text-gray-300 hover:text-white transition-all duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#tech-stack" 
                  className="px-2 py-1 text-gray-300 hover:text-white transition-all duration-300"
                >
                  Stack
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  className="px-2 py-1 text-gray-300 hover:text-white transition-all duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="px-2 py-1 text-gray-300 hover:text-white transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <header className="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20"></div>
            <div className="absolute inset-0" style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.15'
            }}></div>
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <Shield className="w-16 md:w-20 h-16 md:h-20 mx-auto mb-6 md:mb-8 text-cyan-500" />
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-gradient-shine">Brandon Sharp</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 md:mb-12">Cybersecurity Engineer & Full Stack Developer</p>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6">
              <a href="#portfolio" className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                View Projects
              </a>
              <a href="#contact" className="px-6 md:px-8 py-3 rounded-full border border-cyan-500 hover:bg-cyan-500/10 text-cyan-400 font-semibold transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
        </header>

        <section id="about" className="relative py-16 md:py-24" style={{ backgroundColor: '#101625' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-16 text-center">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 md:mb-12 text-center px-4">
                Dedicated cybersecurity professional with a passion for building secure, scalable systems.
                Combining expertise in security architecture with full-stack development to create
                robust solutions that protect and empower.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
                <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Lock className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Security First</h3>
                  <p className="text-gray-400 text-sm md:text-base">Implementing robust security measures in every project</p>
                </div>
                <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Code className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Clean Code</h3>
                  <p className="text-gray-400 text-sm md:text-base">Writing maintainable, efficient, and secure code</p>
                </div>
                <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Terminal className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4" />
                  <h3 className="text-lg md:text-xl font-semibold mb-3">Automation</h3>
                  <p className="text-gray-400 text-sm md:text-base">Building efficient security automation workflows</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: '0.5'
          }}></div>

          <section id="tech-stack" className="relative py-16 md:py-20 bg-gray-900/60">
            <div className="container mx-auto px-4 relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Tech Stack</h2>
              <div className="max-w-5xl mx-auto space-y-6 md:space-y-8 px-4">
                <div className="flex justify-start">
                  <div 
                    ref={securityRef}
                    className="w-full group relative backdrop-blur-md bg-white/10 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 animate-on-scroll"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-6 md:p-8">
                      <Shield className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4 md:mb-6 transform transition-transform group-hover:scale-110 group-hover:text-cyan-300" />
                      <h3 className="text-lg md:text-xl font-semibold mb-4">Security</h3>
                      <ul className="flex flex-wrap gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Bug className="w-4 md:w-5 h-4 md:h-5" /> Penetration Testing
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Lock className="w-4 md:w-5 h-4 md:h-5" /> Security Architecture
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Shield className="w-4 md:w-5 h-4 md:h-5" /> Incident Response
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div 
                    ref={developmentRef}
                    className="w-full group relative backdrop-blur-md bg-white/10 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 animate-on-scroll from-right"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-6 md:p-8">
                      <Code className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4 md:mb-6 transform transition-transform group-hover:scale-110 group-hover:text-cyan-300" />
                      <h3 className="text-lg md:text-xl font-semibold mb-4">Development</h3>
                      <ul className="flex flex-wrap gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Terminal className="w-4 md:w-5 h-4 md:h-5" /> Python & JavaScript
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Server className="w-4 md:w-5 h-4 md:h-5" /> Node.js & React
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Database className="w-4 md:w-5 h-4 md:h-5" /> SQL & NoSQL
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                  <div 
                    ref={infrastructureRef}
                    className="w-full group relative backdrop-blur-md bg-white/10 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 animate-on-scroll"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative p-6 md:p-8">
                      <Cloud className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4 md:mb-6 transform transition-transform group-hover:scale-110 group-hover:text-cyan-300" />
                      <h3 className="text-lg md:text-xl font-semibold mb-4">Infrastructure</h3>
                      <ul className="flex flex-wrap gap-3 md:gap-4 text-gray-300 text-sm md:text-base">
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Blocks className="w-4 md:w-5 h-4 md:h-5" /> Docker & Kubernetes
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Cloud className="w-4 md:w-5 h-4 md:h-5" /> AWS & Azure
                        </li>
                        <li className="flex items-center gap-2 bg-white/5 px-3 md:px-4 py-2 rounded-lg">
                          <Terminal className="w-4 md:w-5 h-4 md:h-5" /> CI/CD Pipelines
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="portfolio" className="relative py-16 md:py-20 bg-gray-900/60">
            <div className="container relative mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Featured Projects</h2>
              
              <div className="relative max-w-6xl mx-auto px-4">
                <button 
                  onClick={prevSlide}
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white/75 hover:text-white hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white/75 hover:text-white hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="flex md:hidden justify-center gap-4 mb-6">
                  <button 
                    onClick={prevSlide}
                    className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white/75 hover:text-white hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextSlide}
                    className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-white/10 text-white/75 hover:text-white hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {visibleProjects.map((project, index) => (
                    <div 
                      key={index}
                      className="group relative backdrop-blur-md bg-white/10 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative p-6 md:p-8">
                        <project.icon className="w-8 md:w-10 h-8 md:h-10 text-cyan-400 mb-4 md:mb-6 transform transition-transform group-hover:scale-110 group-hover:text-cyan-300" />
                        <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white">{project.title}</h3>
                        <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">{project.description}</p>
                        <a 
                          href={project.link}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm md:text-base"
                        >
                          View Details <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>

        <section id="contact" className="relative py-16 md:py-24 bg-gray-900">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Get in Touch</h2>
            <div className="max-w-lg mx-auto px-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="backdrop-blur-md bg-white/5 p-6 md:p-8 rounded-xl border border-white/10">
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                        placeholder="Your message..."
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="relative py-8 md:py-12 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
              <div className="flex gap-6">
                <a href="https://github.com/Shasuau" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Github className="w-5 md:w-6 h-5 md:h-6" />
                </a>
                <a href="https://www.linkedin.com/in/brandonsharp003/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Linkedin className="w-5 md:w-6 h-5 md:h-6" />
                </a>
                <a href="mailto:brandonsharp003@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 md:w-6 h-5 md:h-6" />
                </a>
              </div>
              <p className="text-gray-500 text-xs md:text-sm text-center">
                © {new Date().getFullYear()} Brandon Sharp. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;