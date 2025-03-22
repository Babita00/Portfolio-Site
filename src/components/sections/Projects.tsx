import { motion } from 'framer-motion';
import {  Github } from 'lucide-react';
// import { ExternalLink } from 'lucide-react';
import flatrental from '../../assets/images/Flat-rental.jpg';
import passwordGen from '../../assets/images/password-generator.png'
import billingApp from '../../assets/images/image.png'
const projects = [

  {
    title: 'Online flat rental system',
    description: 'A full-stack flat rental system solution with React and Node.js',
    image: flatrental,
    github: 'https://github.com/Babita00/Online-Flat-Rental-system',
    // demo: 'https://example.com'
  },
  {
    title: 'Billing App',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: billingApp,
    github: 'https://github.com/Babita00/Billing-App',
    // demo: 'https://example.com'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com',
    // demo: 'https://example.com'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app built with React and Javascript',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Babita00/Todo-App',
    // demo: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather tracking with OpenWeather API',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=800',
    github: 'https://github.com/Babita00/Weaher-App',
    // demo: 'https://example.com'
  },
  {
    title: 'Password generator',
    description: 'A simple ads free password generator which generates and stores your passwords of different social medias securely.',
    image: passwordGen,
    github: 'https://github.com/Babita00/Weaher-App',
    // demo: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  {/* <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Demo
                  </a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}