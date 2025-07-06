import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';
import image from '../images/profile.jpeg';
function HeroSection() {
    return (
      <section className="relative bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-accent-500/5 to-primary-400/5"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative container mx-auto px-6 py-24 md:py-40 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0" data-aos='fade-right'>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-primary-500/30">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                👋 Welcome to my portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-primary-100 to-accent-100 bg-clip-text text-transparent animate-gradient">
                Neev Ahuja
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300 leading-relaxed">
              Full Stack Web Developer | Tech Creator
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <a href="#projects" className="group bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-primary-500/25">
                <span className="flex items-center justify-center">
                  Explore My Work
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
              <a href="#contact" className="group border-2 border-primary-500/50 text-white font-semibold py-4 px-8 rounded-xl hover:bg-primary-500/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:border-primary-400">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center" data-aos='fade-left'>
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full overflow-hidden border border-primary-500/30 shadow-2xl backdrop-blur-sm animate-glow">
                <img
                  src={image}
                  alt="Neev Ahuja"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-400 rounded-full animate-pulse shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary-400 rounded-full animate-ping shadow-lg"></div>
            </div>
          </div>
        </div>
  
        <div className="relative container mx-auto px-6 py-12 text-center" data-aos='fade-up'>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed mb-12">
            I'm a B.Tech Computer Science student at GTBIT, passionate about web development and building innovative tech solutions. Welcome to my portfolio!
          </p>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/neev-ahuja" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full hover:bg-primary-500/30 transition-all duration-300 transform hover:scale-110 border border-primary-500/30 hover:border-primary-400">
              <GitHub size={24} className="text-white group-hover:text-primary-300" />
            </a>
            <a href="https://www.linkedin.com/in/neev-ahuja-94b742327/" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full hover:bg-primary-500/30 transition-all duration-300 transform hover:scale-110 border border-primary-500/30 hover:border-primary-400">
              <Linkedin size={24} className="text-white group-hover:text-primary-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full hover:bg-primary-500/30 transition-all duration-300 transform hover:scale-110 border border-primary-500/30 hover:border-primary-400">
              <Twitter size={24} className="text-white group-hover:text-primary-300" />
            </a>
            <a href="mailto:neevahuja888@gmail.com" className="group p-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 backdrop-blur-sm rounded-full hover:bg-primary-500/30 transition-all duration-300 transform hover:scale-110 border border-primary-500/30 hover:border-primary-400">
              <Mail size={24} className="text-white group-hover:text-primary-300" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  export default HeroSection;