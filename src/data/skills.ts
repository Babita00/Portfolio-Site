import type { SkillGroup } from '../types/skill';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    plain: 'The screens people see and click: dashboards, forms and websites.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    plain: 'The server logic behind the screens: APIs, logins and permissions.',
    items: ['Node.js', 'NestJS', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'Authentication & authorization'],
  },
  {
    title: 'Databases',
    plain: 'Where the data lives, organised so it stays correct and fast.',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'TypeORM', 'SQL'],
  },
  {
    title: 'Libraries',
    plain: 'Building blocks for reliable forms, validation and fast data loading.',
    items: ['React Hook Form', 'Zod', 'TanStack Query'],
  },
  {
    title: 'Tools',
    plain: 'Version control, teamwork and packaging apps for deployment.',
    items: ['Git', 'GitHub', 'Docker'],
  },
];
