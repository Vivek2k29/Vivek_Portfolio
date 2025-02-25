import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronRight, Download } from 'lucide-react';

// Update these with your information
const PORTFOLIO_DATA = {
  name: "Vivek Arasam",
  title: "Java Full Stack Developer",
  about: "I'm a passionate developer with expertise in web development, specializing in React, Spring Boot, and machine learning. I have experience building scalable applications and working with cloud technologies.",
  skills: ["Java","Python","Javascript","React","Html", "Css", "SpringBoot","Mysql","Mongodb"],
  projects: [
    {
      title: "Expense-tracker",
      description: "A real-time expense management application with budgeting and analytics features",
      image: "https://imgs.search.brave.com/7q7rDlL7gVPyTYRjNnyteBsvRL9XHXYGCVZjpEOGBRM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmVyZHdhbGxldC5j/b20vdGFjaHlvbi8y/MDE3LzAyL3RyYWNr/LW1vbnRobHktZXhw/ZW5zZXMuanBnP3Jl/c2l6ZT03NzAsNDYy",
      link: "https://github.com/Vivek2k29/Expense-tracker",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Spring_Boot_Curd_Operations",
      description: "A backend application implementing Create, Read, Update, and Delete functionalities using Spring Boot and REST APIs",
      image:"https://imgs.search.brave.com/wKsCSJVTgK98yZ7UYAJHwvpGSf9MZetjKQV7JcHLdzc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9MjU2LGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzLzhqN2t2/cDY2MHJxenQ5OXp1/aThlLnBuZw",
      link: "https://github.com/Vivek2k29/Spring_Boot_Curd_Operations.git",
      technologies: ["Java", "SpringBoot", "MongoDB"]
    },
    {
      title: "Finance_management_-future-savings",
      description: " A financial planning application that helps track expenses, set savings goals, and analyze future savings trends",
      image: "https://imgs.search.brave.com/gZZQvZ8IclVPlA1GDiU7iX06LSZoGOZao6x5ejp-gP8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzY4LzczLzY5/LzM2MF9GXzI2ODcz/Njk3NF9wRmlQVXh5/aGUzblQxemlTVVEy/MjlOMWhSdDg5bjhJ/Uy5qcGc",
      link: "https://github.com/Vivek2k29/Finance_management_-future-savings.git",
      technologies: ["Python", "Flask"]
    },
    {
      title: "Box-Office-Revenue-Prediction",
      description: "machine learning model that analyzes historical movie data to predict box office revenue using regression techniques",
      image: "https://imgs.search.brave.com/HyZt-RZRbH_ySOVp1M9Tj8Zo72xv9eFnGQsErksH2Ho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE4/NzQxMTkzMi9waG90/by9ib3gtb2ZmaWNl/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz10UjJUQlJHejZj/Q1h3MlRBUG8tc1o5/bFZ0U2ZNVnpPeVRi/LXg5cjZ1Ym1ZPQ",
      link: "https://github.com/Vivek2k29/Box-Office-Revenue-Prediction-.git",
      technologies: ["Python", "Flask"]
    },
    {
      title: "Real-Time-Chat-Application",
      description: " A web-based messaging platform with instant messaging, user authentication, and WebSocket support for real-time communication",
      image: "https://imgs.search.brave.com/KOUvK2CzeslY_rhhyuFUbUMGJqz80IjrpXXjf9f7hJY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI1/NTg2MTk2Ny9waG90/by93b21hbi1oYW5k/LXR5cGluZy1vbi1r/ZXlib2FyZC1sYXB0/b3Atd2l0aC1tb2Jp/bGUtc21hcnRwaG9u/ZS1saXZlLWNoYXQt/Y2hhdHRpbmctb24t/YXBwbGljYXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWRzNmlHR0hoWTJv/NVZRSF9Db3BucUVx/N1JycDI0ZkVKSTF2/TGExRlJzQlk9",
      link: "https://github.com/Vivek2k29/Real-Time-Chat-Application.git",
      technologies: ["Java","SpringBoot","Gemini_Api"]
    },
    
    {
      title: "Airplane Ticket Booking System",
      description: "An online flight reservation system that allows users to search, book, and manage airline tickets with real-time availability and payment integration.",
      image: "https://imgs.search.brave.com/4QHWdMElC7nWvJgwIah8yVpn1MAF2we2f_TZeD1Q1A0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by90/b3Atdmlldy10cmF2/ZWwtZWxlbWVudHMt/Y29sbGVjdGlvbl8y/My0yMTQ4NjkxMTMz/LmpwZz9zZW10PWFp/c19oeWJyaWQ",
      link: "https://github.com/Vivek2k29/airlines.git",
      technologies: ["Html","Css","Javascript","BootStrap"]
    },
  ],
  social: {
    github: "https://github.com/Vivek2k29",
    linkedin: "https://www.linkedin.com/in/vivek-arasam-13aa96251",
    email: "arasamvivek@gmail.com"
  }
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'projects', 'contact'];

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-gray-900"
            >
              {PORTFOLIO_DATA.name.split(' ')[0]}
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium capitalize transition-colors ${
                    activeSection === section
                      ? 'text-indigo-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left ${
                      activeSection === section
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              {PORTFOLIO_DATA.title}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={PORTFOLIO_DATA.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href={PORTFOLIO_DATA.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.social.email}`}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
  <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
  <p className="text-gray-600 mb-6">{PORTFOLIO_DATA.about}</p>
  <a 
    href="/Arasam_Vivek(Resume).pdf"  // Replace with your actual file name
    download="Vivek_Resume.pdf"
    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
  >
    <Download className="mr-2" size={20} />
    Download Resume
  </a>
</div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            I'm always open to new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${PORTFOLIO_DATA.social.email}`}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </a>
            <a
              href={PORTFOLIO_DATA.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50"
            >
              <Linkedin className="mr-2" size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;