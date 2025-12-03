import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Data Construct",
    icon: Briefcase,
    roles: [
      {
        title: "Fullstack Developer Intern",
        period: "Feb 2024 – Apr 2024",
        points: [
          "Single-handedly built a full-stack cricket academy management platform using Next.js 14, Node.js, Express, PostgreSQL, TypeScript, and Tailwind CSS — from database design to responsive UI.",
          "Designed 30+ REST API endpoints with normalized PostgreSQL schema, proper indexing, RBAC, JWT authentication, and complex transactional SQL queries.",
          "Engineered a concurrency-safe booking system with real-time slot generation, conflict detection, staff/equipment availability tracking, and dynamic pricing.",
          "Built reusable admin module with React Hook Form + Zod validation, RTK Query caching, and component library used across 4 core modules.",
          "Developed mobile-first responsive dashboard featuring dynamic tables, modal workflows, tabbed navigation, and role-based UI rendering.",
        ],
      },
      {
        title: "Junior Fullstack Developer",
        period: "May 2024 – Present",
        points: [
          "Developing a multi-tenant education platform connecting 50+ institutions with 3-tier RBAC and 8+ modules (Grants, Events, Course Catalog, Recruitment) using React + TypeScript.",
          "Implemented advanced search & filtering system with debounced inputs, dynamic query building, persistent state, and 20+ React Query-powered endpoints for real-time sync.",
          "Led performance optimization using incremental rendering and memoization across major modules.",
          "Designed reusable data visualization layer with TanStack Table (server-side pagination, sorting, column management) and 20+ components — reducing dev time by 40%.",
          "Created consistent, responsive admin dashboard system with dynamic data tables, modals, and intuitive tabbed navigation across all modules.",
        ],
      },
    ],
  },
];

const education = {
  icon: GraduationCap,
  degree: "Bachelor of Computer Engineering",
  school: "Pokhara University",
  period: "2021 – 2025",
  description: "Graduated with honors • Specialized in Software Engineering • Led multiple hackathons and delivered production-grade projects",
};

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Company Header + Roles */}
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {experiences.map((exp) => (
            <div key={exp.company} className="mb-16">
              {/* Company Name + Icon */}
              <motion.div variants={item} className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg">
                  <exp.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{exp.company}</h3>
              </motion.div>

              {/* Role Cards – Perfectly Left-Aligned */}
              <div className="space-y-10 ml-16">
                {exp.roles.map((role, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    className="bg-card border border-border/60 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 
                               hover:-translate-y-1 hover:border-indigo-500/30"
                  >
                    {/* Title + Period Badge */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                      <h4 className="text-xl md:text-2xl font-bold text-foreground">{role.title}</h4>
                      <span className="inline-block px-5 py-2 bg-indigo-600 text-white font-medium text-sm rounded-full shadow-md">
                        {role.period}
                      </span>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-4">
                      {role.points.map((point, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.08 }}
                          className="flex gap-4 text-muted-foreground leading-relaxed"
                        >
                          <span className="text-indigo-600 mt-1.5 text-lg">▹</span>
                          <span>{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Education</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-card border border-border/60 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center shadow-lg flex-shrink-0">
                  <education.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                    <h3 className="text-2xl font-bold">{education.degree}</h3>
                    <span className="px-5 py-2 bg-indigo-600 text-white font-medium text-sm rounded-full">
                      {education.period}
                    </span>
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">{education.school}</p>
                  <p className="text-muted-foreground leading-relaxed">{education.description}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}