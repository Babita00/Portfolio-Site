import type { ExperienceEntry } from '../types/experience';

/** Start of professional experience (internship at Data Construct). Used to compute years of experience. */
export const careerStart = new Date(2025, 1, 1);

export const experience: ExperienceEntry[] = [
  {
    organization: 'Data Construct Pvt. Ltd.',
    location: 'Lalitpur, Nepal',
    period: 'Feb 2025 — Present',
    progression: ['Full Stack Developer Intern', 'Mid-Level Full Stack Developer'],
    summary:
      'Joined as an intern and grew into a mid-level role, building production platforms for exam-preparation, higher-education and sports clients, and reviewing and testing municipal government systems.',
    projects: [
      {
        name: 'Prepbox — mock test platform',
        slug: 'prepbox',
        points: [
          'Worked across the React frontend and Express API of a timed mock-test platform for licence and entrance exams.',
        ],
      },
      {
        name: 'HEI Nexus — higher-education network',
        slug: 'hei-nexus',
        points: [
          'Built modules of a multi-tenant platform with 3-tier role-based access for 50+ institutions.',
          'Delivered advanced search and filtering across 20+ REST endpoints with React Query caching.',
          'Created a TanStack Table data layer and 20+ reusable components, cutting development time for new views by about 40%.',
        ],
      },
      {
        name: 'iCaptain — sports academy platform',
        slug: 'icaptain',
        points: [
          'Built the platform end to end with Next.js 14, Express and PostgreSQL, from schema design to responsive UI.',
          'Designed 30+ REST endpoints on a normalized, indexed schema with JWT auth and role-based access.',
          'Implemented a transactional booking engine that prevents double-bookings under concurrent requests.',
        ],
      },
    ],
    review: {
      title: 'Code review & QA',
      description: 'Code reviewer and QA for municipal government systems built by Data Construct.',
      systems: [
        {
          name: 'Project Management System',
          client: 'Lalitpur Metropolitan City Office',
          site: { label: 'pms.lmc.gov.np', href: 'https://pms.lmc.gov.np/login', available: true },
        },
        {
          name: 'Municipal Plan Management System',
          client: 'Mechinagar Municipality Office, Jhapa',
          site: { label: 'mms.dataconstruct.com.np', href: 'https://mms.dataconstruct.com.np/', available: true },
        },
      ],
    },
  },
];

export const education = {
  degree: 'Bachelor of Computer Engineering',
  school: 'Nepal College of Information Technology, Pokhara University',
  period: '2021 — 2025',
};

export const certification = {
  name: 'AWS Academy Cloud Foundations',
  issuer: 'AWS Academy Graduate',
};
