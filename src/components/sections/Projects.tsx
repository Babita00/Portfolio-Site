import { useEffect, useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import flatrental from "../../assets/images/Flat-rental.jpg";
import passwordGen from "../../assets/images/password-generator.png";
import billingApp from "../../assets/images/image.png";
import athleticore from "../../assets/images/athleticore.png";
import grahamantra from "../../assets/images/grahamantra.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Online Flat Rental Platform",
      description:
        "A comprehensive rental platform with real-time messaging, secure authentication, and efficient payment processing supporting 1000+ concurrent users.",
      image: flatrental,
      technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "JWT"],
      githubFrontend: "https://github.com/Babita00/Online-Flat-Rental-system",
    },
    {
      title: "Powerlifting Game Management System",
      description:
        "Cross-platform mobile and backend system for powerlifting competitions with live leaderboards and automated result generation.",
      image: athleticore,
      technologies: ["React Native", "Node.js", "PostgreSQL", "RBAC"],
      githubFrontend: "#",
      githubBackend: "#",
    },
    {
      title: "Jyotish",
      description:
        "A Next.js application using TailwindCSS with Supabase as the backend database.",
      image: grahamantra,
      technologies: ["Next.js", "TailwindCSS", "Supabase"],
      link: "https://grahamantra.vercel.app/",
      github: "https://github.com/Babita00/Jyotish",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather tracking with OpenWeather API",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/Babita00/Weaher-App",
      technologies: ["Next.js", "TailwindCSS", "Supabase"],
    },
    {
      title: "Billing App",
      description: "A full-stack e-commerce solution with React and Node.js",
      image: billingApp,
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Babita00/Billing-App",
    },
    {
      title: "Password Generator",
      description:
        "A simple ads-free password generator which stores your passwords securely.",
      image: passwordGen,
      technologies: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/Babita00/Weaher-App",
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  {/* Description hidden, remove comment if you want */}
                  {/* <p className="text-gray-600 mb-4">{project.description}</p> */}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center flex-wrap gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span className="text-sm font-medium">View Project</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <Github size={18} className="mr-1" />
                        <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                    {project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <Github size={18} className="mr-1" />
                        <span className="text-sm font-medium">Frontend</span>
                      </a>
                    )}
                    {project.githubBackend && (
                      <a
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                      >
                        <Github size={18} className="mr-1" />
                        <span className="text-sm font-medium">Backend</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
