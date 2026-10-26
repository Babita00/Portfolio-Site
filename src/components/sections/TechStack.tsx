import { useEffect, useRef, useState } from 'react';
import { Code, Database, Cloud, GitBranch, Users } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
      color: 'teal',
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express.js', 'RESTful API', 'MongoDB', 'PostgreSQL'],
      color: 'blue',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS (S3, Lambda, EC2, RDS)', 'Docker', 'Kubernetes', 'Linux'],
      color: 'slate',
    },
    {
      title: 'Version Control',
      icon: GitBranch,
      skills: ['Git', 'GitLab', 'CI/CD'],
      color: 'gray',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: ['Problem-solving', 'Communication', 'Collaboration', 'Quick Learning'],
      color: 'emerald',
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-slate-50"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 bg-${category.color}-100 rounded-lg mr-3`}>
                      <Icon className={`text-${category.color}-600`} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm font-medium hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Technical Domains
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Full-Stack Web Development',
                'RESTful API Design',
                'Database Architecture',
                'Responsive UI/UX',
                'Authentication & Authorization',
                'Cloud Infrastructure',
              ].map((domain, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 hover:bg-indigo-600 hover:text-white bg-white text-indigo-600 border border-b-2 shadow-lg rounded-lg font-medium  transition-colors duration-300"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
