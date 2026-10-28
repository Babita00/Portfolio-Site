import cvUrl from '../assets/Babita_Awasthi_CV.pdf';

export const profile = {
  name: 'Babita Awasthi',
  role: 'Full Stack Developer',
  company: 'Data Construct Pvt. Ltd.',
  location: 'Kathmandu, Nepal',
  email: 'babitaasth07@gmail.com',
  github: 'https://github.com/Babita00',
  linkedin: 'https://www.linkedin.com/in/babita-asth/',
  cv: { href: cvUrl, fileName: 'Babita_Awasthi_CV.pdf' },
  primaryStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Express.js', 'PostgreSQL'],
} as const;

export const navItems = [
  { id: 'work', label: 'Work' },
  { id: 'tech-stack', label: 'Tech stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
] as const;
