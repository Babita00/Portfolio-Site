import { motion } from 'framer-motion';
import { Code2, Terminal } from 'lucide-react';

const skills = [
  {
    icon: <Code2 size={24} />,
    title: 'Frontend Development',
    description: 'Experienced in React, TypeScript,Next.js and modern CSS frameworks.'
  },
  {
    icon: <Terminal size={24} />,
    title: 'Backend Development',
    description: 'Proficient in Node.js, Express, and database management.'
  },

];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          I'm a dedicated full-stack developer specializing in the MERN stack, passionate about building efficient and scalable web applications. With experience in both frontend and backend development, I transform ideas into robust, high-performance solutions that enhance user experiences.

          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-3/4 mx-auto">
  {skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full md:w-5/6 mx-auto"
    >
      <div className="text-indigo-600 mb-4">{skill.icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{skill.title}</h3>
      <p className="text-gray-600">{skill.description}</p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}