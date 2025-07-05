function SkillsSection() {
    const skillCategories = [
      {
        title: "Programming Languages",
        icon: "💻",
        skills: ["Python", "JavaScript", "C++"],
        gradient: "from-primary-500 to-primary-600",
        bgGradient: "from-dark-800/50 to-dark-700/50"
      },
      {
        title: "Web Development",
        icon: "🌐",
        skills: ["React", "Node.js", "Next.js", "Tailwind CSS", "HTML/CSS"],
        gradient: "from-accent-500 to-accent-600",
        bgGradient: "from-dark-800/50 to-dark-700/50"
      },
      {
        title: "Databases",
        icon: "🗄️",
        skills: ["MySQL", "MongoDB"],
        gradient: "from-green-500 to-emerald-600",
        bgGradient: "from-dark-800/50 to-dark-700/50"
      },
      {
        title: "Tools & Others",
        icon: "🛠️",
        skills: ["Git", "VS Code", "Postman"],
        gradient: "from-orange-500 to-red-600",
        bgGradient: "from-dark-800/50 to-dark-700/50"
      },
    ];
  
    return (
      <section id="skills" className="py-24 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-accent-500/10 to-primary-500/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16" data-aos='fade-up'>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${category.bgGradient} rounded-2xl p-8 shadow-2xl border border-dark-600/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-primary-500/25 hover:border-primary-500/30`} 
                data-aos='fade-up' 
                data-aos-delay={index * 100}
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${category.gradient} rounded-2xl text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm px-4 py-3 rounded-xl text-gray-300 font-medium text-center transition-all duration-300 hover:bg-primary-500/20 hover:shadow-md hover:scale-105 cursor-default border border-primary-500/20 hover:border-primary-400/40"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional skills section */}
          <div className="mt-20" data-aos='fade-up'>
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl border border-teal-400/30">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Always Learning</h3>
              <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto">
                I'm constantly exploring new technologies and improving my skills. Currently diving deep into cloud computing, DevOps practices, and advanced React patterns.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  AWS ☁️
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  Docker 🐳
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  TypeScript 📘
                </span>
                <span className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 border border-white/20">
                  GraphQL 🚀
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
export default SkillsSection;