import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { useEffect, useState } from 'react';
import resumePdf from '../../assets/FullStackDeveloper.pdf';
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🔹 Environment variables
  const emailId = import.meta.env.VITE_EMAIL_ID;
  const github = import.meta.env.VITE_GITHUB_URL;
  const linkedin = import.meta.env.VITE_LINKEDIN_URL;
  const name = import.meta.env.VITE_NAME;
  const resumeUrl = resumePdf
  const handleResumeDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Babita_Awasthi_Resume.pdf'; // Customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-50 pt-20"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
              {name}
            </h1>
            <div className="h-1 w-24 bg-indigo-600 mx-auto mb-6"></div>
          </div>

          <p className="text-2xl md:text-3xl text-slate-700 mb-6 font-light">
            Full-Stack Developer
          </p>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building performant, user-centric solutions with React, Next.js, Node.js, and PostgreSQL.
            Nearly 1 year of experience delivering enterprise-grade platforms.
          </p>

          <div className="flex items-center justify-center gap-2 text-slate-600 mb-8">
            <MapPin size={18} />
            <span> Kathmandu, Nepal</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a
              href={`mailto:${emailId}`}
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-slate-700 hover:text-indigo-600"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-slate-700 hover:text-indigo-600"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-slate-700 hover:text-indigo-600"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              Get In Touch
            </button>

            <button
              onClick={handleResumeDownload}
              className="px-8 py-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-medium flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;