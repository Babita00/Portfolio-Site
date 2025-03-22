import { FaReact, FaNodeJs, FaGitAlt,FaDatabase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiFigma,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  
} from "react-icons/si";

export default function TechStacks() {
  return (
    <section id="tech-stack" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tech Stacks</h2>
          {/* <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These are the technologies I work with. I continuously explore and
            improve my skills.
          </p> */}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {/* React Icon */}
          <div className="flex flex-col items-center">
            <FaReact size={48} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">React</h3>
          </div>

          {/* Node.js Icon */}
          <div className="flex flex-col items-center">
            <FaNodeJs size={48} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Node.js</h3>
          </div>

          {/* Next.js Icon */}
          <div className="flex flex-col items-center">
            <SiNextdotjs size={48} className="text-black mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Next.js</h3>
          </div>

          {/* Git Icon */}
          <div className="flex flex-col items-center">
            <FaGitAlt size={48} className="text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Git</h3>
          </div>

          {/* PostgreSQL Icon */}
          <div className="flex flex-col items-center">
            <SiPostgresql size={48} className="text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">PostgreSQL</h3>
          </div>

          <div className="flex flex-col items-center">
            <SiMongodb size={48} className="text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">MongoDB</h3>
          </div>
          <div className="flex flex-col items-center">
            <SiExpress size={48} className="text-black mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Express.js</h3>
          </div>

          {/* SQL Icon */}
          <div className="flex flex-col items-center">
            <FaDatabase size={48} className="text-blue-700 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">SQL</h3>
          </div>

          {/* Figma Icon */}
          <div className="flex flex-col items-center">
            <SiFigma size={48} className="text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">Figma</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
