import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
 
  {
    type: "work",
    title: "Fullstack Developer (Junior)",
    company: "Higher Education Networking",
    period: "Feb 2024 – Present",
    description:
      "Built a multi-tenant digital platform connecting 50+ institutions with 8+ modules including Grants, Events, Course Catalog, and Recruitment. Designed advanced search & filtering system with React Query integration (20+ endpoints) and implemented a data-visualization layer with TanStack Table for 1,000+ records using reusable components.",
    icon: Briefcase,
  },
   {
    type: "work",
    title: "Full Stack Developer",
    company: "Data Construct",
    period: "Feb 2024 – Present",
    description:
      "Developed a cricket academy management platform using Node.js, Express.js, PostgreSQL, Next.js 14, React, and TypeScript. Implemented REST APIs (30+ endpoints), RBAC, JWT authentication, transactional booking engine, Redux Toolkit Query, React Hook Form with Zod validation, and dynamic UI components.",
    icon: Briefcase,
  },
 
  {
    type: "education",
    title: "Bachelor of Computer Engineering",
    company: "Pokhara University",
    period: "2021 - 2025",
    description:
      "Graduated with honors, specialized in software engineering, led student projects and hackathons.",
    icon: GraduationCap,
  },
];


const Experience = () => {
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
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-2 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Experience & Education
        </h2>
         <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative mb-12 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 150 + 200}ms` }}
              >
                <div
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot and icon */}
                  <div className="absolute left-8 md:left-1/2 md:-ml-6 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10 shadow-lg">
                    <experience.icon className="text-white" size={20} />
                  </div>

                  {/* Content card */}
                  <div
                    className="ml-24 md:ml-0 md:w-[calc(50%-3rem)] md:text-left" 
                  >
                    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full mb-3">
                        {experience.period}
                      </span>
                      <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
                      <p className="text-muted-foreground font-medium mb-3">{experience.company}</p>
                      <p className="text-muted-foreground">{experience.description}</p>
                    </div>
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

export default Experience;
