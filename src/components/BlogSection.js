import { Github as GitHub,  ArrowRight } from 'lucide-react';


function BlogCard({ title, date, excerpt, link, image }) {
    return (
      <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-primary-500/25 border border-dark-600/50 backdrop-blur-sm hover:border-primary-500/30">
        <div className="h-40 bg-gradient-to-br from-dark-700 to-dark-800 overflow-hidden">
          <img
            src={image || "/api/placeholder/600/400"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </div>
  
        <div className="p-6">
          <p className="text-sm text-gray-400 mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2 text-white hover:text-primary-400 transition-colors">{title}</h3>
          <p className="text-gray-300 mb-4 line-clamp-3">{excerpt}</p>
  
          <a
            href={link}
            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300 group"
          >
            Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    );
  }
  function BlogSection() {
    const blogPosts = [
      {
        title: "How AI is Changing Stock Trading",
        date: "March 1, 2025",
        excerpt: "Explore how artificial intelligence technologies are revolutionizing traditional stock trading approaches and creating new opportunities for investors.",
        link: "/blog/ai-stock-trading",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Building My First Generative AI Model",
        date: "February 15, 2025",
        excerpt: "A deep dive into my journey of creating a generative AI model, the challenges I faced, and the lessons I learned along the way.",
        link: "/blog/first-generative-ai",
        image: "/api/placeholder/600/400",
      },
      {
        title: "Tech Behind My Medical Portal",
        date: "January 20, 2025",
        excerpt: "An inside look at the technology stack and architecture decisions that power my medical history portal project.",
        link: "/blog/medical-portal-tech",
        image: "/api/placeholder/600/400",
      },
    ];
  
    return (
      <section id="blog" className="py-24 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 animate-float"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16" data-aos='fade-up'>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Thoughts, insights, and experiences from my journey in tech and development.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
  
          <div className="text-center mt-12" data-aos='fade-up'>
            <a
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 border border-primary-400/30"
            >
              View All Posts <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    );
  }
    export default BlogSection;  