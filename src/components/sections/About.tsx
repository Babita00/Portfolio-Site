import { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';

const About = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            About Me
          </h2>
          <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto">
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Full-stack developer with nearly 1 year of experience in web development using React, Next.js,
              Node.js, and PostgreSQL. I specialize in building RESTful APIs, scalable database designs,
              responsive UI, and secure authentication systems.
            </p>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              <strong>Key Strengths:</strong>
            </p>
            <ul className="list-disc list-inside text-lg text-slate-600 mb-12 space-y-2">
              <li>Full-stack development with React, Next.js, Node.js, and PostgreSQL</li>
              <li>RESTful API design with 30+ endpoints and complex SQL optimization</li>
              <li>Role-based access control, JWT authentication, and transaction management</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-6">
           
              <div className="p-6 bg-slate-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <Award className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Certifications</h3>
                </div>
                <p className="text-slate-700 font-medium mb-1">
                  AWS Academy Cloud Foundations
                </p>
                <p className="text-slate-600 text-sm">
                  AWS Academy Graduate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
