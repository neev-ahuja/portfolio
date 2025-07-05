function AboutSection() {
  
    return (
      <section id="about" className="py-24 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16" data-aos='fade-up'>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300" data-aos='fade-up' data-aos-delay='200'>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-xl">👨‍💻</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Passionate Developer</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Hi! I'm Neev Ahuja, a passionate web developer and tech enthusiast currently pursuing a B.Tech in Computer Science Engineering at GTBIT. I specialize in building modern, responsive, and user-friendly web applications using the latest technologies.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300" data-aos='fade-up' data-aos-delay='300'>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Full-Stack Expertise</h3>
                      <p className="text-gray-300 leading-relaxed">
                        I enjoy working on both frontend and backend development, creating seamless user experiences with clean and efficient code. Whether it's designing interactive UI components or developing robust backend systems, I love turning ideas into functional digital solutions.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300" data-aos='fade-up' data-aos-delay='400'>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-xl">📚</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">Continuous Learning</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Currently, I'm exploring full-stack development and improving my skills in UI/UX design to build even better, more intuitive web applications. When I'm not coding, you can find me experimenting with new frameworks, optimizing performance, or learning about the latest trends in web development.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats/Highlights */}
              <div className="space-y-6" data-aos='fade-left' data-aos-delay='500'>
                <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-8 rounded-2xl text-white shadow-2xl border border-emerald-400/30">
                  <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm">🎓</span>
                      </div>
                      <span className="text-white">B.Tech CSE at GTBIT</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm">💻</span>
                      </div>
                      <span className="text-white">Full-Stack Developer</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm">🌟</span>
                      </div>
                      <span className="text-white">Tech Enthusiast</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                        <span className="text-sm">🎯</span>
                      </div>
                      <span className="text-white">Problem Solver</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-6 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm">
                  <h4 className="text-lg font-semibold text-white mb-4">Currently Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">UI/UX Design</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">Cloud Computing</span>
                    <span className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/30">DevOps</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

export default AboutSection;