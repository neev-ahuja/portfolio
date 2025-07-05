import { Github as GitHub, Linkedin, Mail, Calendar } from "lucide-react";
import { useState } from "react";

function ContactSection() {
  const accessKey = "8dffb8f8-c30d-4023-beed-23eb4ca4a6dd";
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        e.target.reset(); // Clear the form
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-accent-500/10 to-primary-500/10 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16" data-aos='fade-up'>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos='fade-up' data-aos-delay='200'>
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Feel free to reach out using the form or through my social media profiles. I'm always excited to hear about new opportunities and collaborations.
              </p>

              <div className="space-y-6">
                <a href="mailto:neevahuja888@gmail.com" className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300 border border-primary-500/30">
                    <Mail size={20} className="text-primary-400" />
                  </div>
                  <span className="font-medium">neevahuja888@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/neev-ahuja-94b742327/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300 border border-primary-500/30">
                    <Linkedin size={20} className="text-primary-400" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>

                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-300 hover:text-primary-400 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center mr-4 group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300 border border-primary-500/30">
                    <Calendar size={20} className="text-primary-400" />
                  </div>
                  <span className="font-medium">Schedule a Meeting</span>
                </a>
              </div>
            </div>
          </div>

          <div data-aos='fade-up' data-aos-delay='300'>
            <div className="bg-gradient-to-br from-dark-800/50 to-dark-700/50 p-8 rounded-2xl shadow-2xl border border-dark-600/50 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="Your name"
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
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-dark-700/50 border border-dark-600/50 rounded-xl text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-accent-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary-500/25 border border-primary-400/30"
                >
                  Send Message
                </button>

                {statusMessage && (
                  <p className="text-center text-sm font-medium">
                    {statusMessage.includes("successfully") ? (
                      <span className="text-green-400">{statusMessage}</span>
                    ) : (
                      <span className="text-red-400">{statusMessage}</span>
                    )}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
