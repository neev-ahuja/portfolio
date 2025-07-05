import { Github as GitHub, Linkedin, Twitter, Mail } from 'lucide-react';

function Footer() {
    return (
      <footer className="bg-gradient-to-r from-dark-950 to-dark-900 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-accent-500/5 to-primary-500/5 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                Neev Ahuja
              </h3>
              <p className="text-gray-400">Full Stack Web Developer | Tech Creator</p>
            </div>
  
            <div className="flex space-x-6">
              <a 
                href="https://github.com/neev-ahuja" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 border border-primary-500/30 hover:border-primary-400/50 backdrop-blur-sm"
              >
                <GitHub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/neev-ahuja-94b742327/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 border border-primary-500/30 hover:border-primary-400/50 backdrop-blur-sm"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 border border-primary-500/30 hover:border-primary-400/50 backdrop-blur-sm"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="mailto:neevahuja888@gmail.com" 
                className="p-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full text-gray-300 hover:text-primary-400 transition-all duration-300 hover:scale-110 border border-primary-500/30 hover:border-primary-400/50 backdrop-blur-sm"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
  
          <div className="border-t border-dark-600/50 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Neev Ahuja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;