import AboutSection from './components/AboutSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

function App() {

  
  useEffect(() => {
    AOS.init({
      duration: 600
    });
  }, []); 


  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        {/* <BlogSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;