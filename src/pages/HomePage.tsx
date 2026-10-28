import { usePageMeta } from '../hooks/usePageMeta';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Experience } from '../components/sections/Experience';
import { Hero } from '../components/sections/Hero';
import { TechStack } from '../components/sections/TechStack';
import { Work } from '../components/sections/Work';

export function HomePage() {
  usePageMeta(
    'Babita Awasthi — Full Stack Developer',
    'Full Stack Developer building reliable web applications with React, Next.js, TypeScript, Node.js, NestJS and PostgreSQL. Case studies of exam, interview, sports and education platforms.',
  );

  return (
    <>
      <Hero />
      <Work />
      <TechStack />
      <Experience />
      <About />
      <Contact />
    </>
  );
}
