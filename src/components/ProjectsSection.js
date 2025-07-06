import { Github as GitHub, ExternalLink } from 'lucide-react';
import ToDoList from '../images/to-do-list.png';
import urlShortner from '../images/url-shortner.png';
import BlogApp from '../images/blog-app.png';
function ProjectCard({ title, description, tech, demoLink, githubLink, image }) {
  return (
    <div className="group bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-primary-500/25 border border-dark-600/50 backdrop-blur-sm hover:border-primary-500/30" data-aos="fade-up">
      <div className="relative h-56 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-primary-500/90 to-accent-500/90 backdrop-blur-sm rounded-full shadow-lg hover:from-primary-400 hover:to-accent-400 transition-all duration-300"
              title="Live Demo"
            >
              <ExternalLink size={16} className="text-white" />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-dark-800/90 to-dark-700/90 backdrop-blur-sm rounded-full shadow-lg hover:from-dark-700 hover:to-dark-600 transition-all duration-300 border border-dark-600/50"
              title="GitHub Repository"
            >
              <GitHub size={16} className="text-gray-300" />
            </a>
          )}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors">{title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-primary-500/20 to-accent-500/20 text-primary-300 text-sm rounded-full font-medium border border-primary-500/30 hover:from-primary-500/30 hover:to-accent-500/30 transition-all duration-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex space-x-4 pt-4 border-t border-dark-600/50">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-primary-400 hover:text-primary-300 transition-colors group/link"
            >
              <span>Live Demo</span>
              <ExternalLink size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-300 transition-colors group/link"
            >
              <span>GitHub</span>
              <GitHub size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Chess Game",
      description: "This is a simple Chess Game developed in JavaScript, providing a classic two-player chess experience , with a user-friendly interface. The game follows standard chess rules, with the goal of checkmating the opponent's king.It also has a ai player with custom difficulty level.",
      tech: ["Next JS", "Chess.js", "Stockfish" , "Socket.io" , "Node JS" , "TailwindCSS"],
      demoLink: "https://chess-game-next-ashen.vercel.app/",
      githubLink: "https://github.com/neev-ahuja/chess-game-next",
      image: "https://github.com/neev-ahuja/neev-ahuja.github.io/blob/master/Screenshot%202025-06-22%20135234.png?raw=true",
    },
    {
      title: "NextJS Chat Application",
      description: "This is a simple real-time chat application built using Next.js for the frontend and Socket.IO for WebSocket-based communication. The app allows multiple users to join and chat in real time, delivering a fast and interactive messaging experience.",
      tech: ["Next JS", "Socket.io" , "Node JS" , "MongoDB" , "TailwindCSS"],
      demoLink: "https://next-chat-app-red.vercel.app",
      githubLink: "https://github.com/neev-ahuja/next-chat-app",
      image: "https://github.com/neev-ahuja/next-chat-app/blob/main/download.png?raw=true",
    },
    {
      title: "Blog App",
      description: "A comprehensive platform that stores and display blogs written by users. This full-stack application is built using the MERN stack, which includes MongoDB, Express, React, and Node.js.",
      tech: ["React", "MongoDB", "Express", "Node.js"],
      githubLink: "https://github.com/neev-ahuja/Blog-website",
      image: BlogApp,
    },
    {
      title: "URL Shortner App",
      description: "An innovative URL shortening service that converts long URLs into short and easy-to-share links. This app is built using Node.js, Express, and MongoDB.",
      tech: ["NodeJs" , "React" , "Express" , "MongoDB"],
      githubLink: "https://github.com/neev-ahuja/url-shortner",
      image: urlShortner,
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent-500/10 to-primary-500/10 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16" data-aos='fade-up'>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and software engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="text-center mt-16" data-aos='fade-up'>
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <a 
            href="https://github.com/neev-ahuja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 border border-primary-400/30"
          >
            <GitHub size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;