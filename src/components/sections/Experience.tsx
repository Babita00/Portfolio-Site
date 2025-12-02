
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const workExperiences = [
  {
    company: "Data Construct",
    icon: Briefcase,
    roles: [
      {
        title: "Fullstack Developer Intern",
        period: "Feb 2024 – Aug 2024",
        points: [
          "Developed the cricket academy management platform using Node.js, Express.js, PostgreSQL, Next.js, and TypeScript.",
          "Built REST APIs (30+ endpoints), RBAC, JWT auth, and transactional booking engine.",
        ],
      },
      {
        title: "Junior Fullstack Developer",
        period: "Sep 2024 – Present",
        points: [
          "Developed multi-tenant education platform with role-based access, 50+ institutions, 8+ modules using Next.js and Node.js.",
          "Enhanced UI with Redux Toolkit Query, RHF + Zod, optimized reusable components.",
          "Improved performance across major modules with incremental rendering.",
          "Developed data-visualization layer with 20+ reusable components, boosting efficiency by 40%.",
          " Developed responsive admin dashboard with dynamic data tables, modals, and tabbed navigation."
        ],
      },
    ],
  },
];

const education = [
  {
    icon: GraduationCap,
    degree: "Bachelor of Computer Engineering",
    school: "Pokhara University",
    period: "2021 – 2025",
    description:
      "Graduated with honors, specialized in software engineering. Led hackathons and developed multiple production-grade projects.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* =================== WORK EXPERIENCE =================== */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

        {workExperiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
            className="mb-12"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                <exp.icon className="text-white" size={22} />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">{exp.company}</h3>

                <div className="space-y-4">
                  {exp.roles.map((role, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={cardVariants}
                      className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Accent Bar */}
                      <div className="absolute left-0 top-0 h-full w-1.5 bg-indigo-600 rounded-r-md"></div>

                      <h4 className="text-lg font-bold">{role.title}</h4>
                      <p className="text-sm text-indigo-600 mb-3">{role.period}</p>

                      <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
                        {role.points.map((point, x) => (
                          <li key={x}>{point}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* =================== EDUCATION =================== */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-20 mb-4">
          Education
        </h2>
        <div className="h-1 w-20 bg-indigo-600 mx-auto mb-12"></div>

        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
            className="flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
              <edu.icon className="text-white" size={22} />
            </div>

            <div className="bg-card p-6 rounded-xl border border-border shadow-md hover:shadow-xl transition-all duration-300 flex-1">
              <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-600 text-sm rounded-full mb-3">
                {edu.period}
              </span>
              <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground font-medium mb-3">{edu.school}</p>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
