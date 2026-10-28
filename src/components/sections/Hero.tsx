import { motion } from 'framer-motion';
import { ArrowDownRight, Download, Github, Linkedin } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { yearsOfExperience } from '../../utils/experience';
import { profile } from '../../data/profile';
import { projects } from '../../data/projects';
import { ProductCollage } from '../hero/ProductCollage';
import { buttonClasses } from '../ui/styles';
import { TechLogo } from '../ui/TechLogo';

const intro = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

const atAGlance = [
  { value: yearsOfExperience(), label: 'years of professional experience' },
  { value: String(projects.length), label: 'products built' },
  {
    value: String(projects.filter((project) => project.context === 'Independent build').length),
    label: 'built solo, from database to deployment',
  },
  { value: '50+', label: 'institutions served by HEI Nexus' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line" aria-labelledby="hero-title">
      <div
        className="blueprint pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black_30%,transparent_95%)]"
        aria-hidden="true"
      />
      <CornerMarks />

      <div className="page-x relative grid gap-14 pb-14 pt-28 sm:pt-36 lg:grid-cols-12 lg:items-center lg:gap-10 lg:pb-20">
        <motion.div className="lg:col-span-6" initial="initial" animate="animate" transition={{ staggerChildren: 0.08 }}>
          <motion.p
            variants={intro}
            className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-card px-3 py-1.5 text-xs text-ink-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            {profile.role} · {profile.location}
          </motion.p>

          <motion.h1
            variants={intro}
            id="hero-title"
            className="mt-7 font-serif text-[2.75rem] leading-[0.98] tracking-tight sm:text-6xl lg:text-[3.6rem] xl:text-[4.1rem]"
          >
            Building digital products from <em className="text-accent">interface</em> to{' '}
            <em className="text-accent">infrastructure</em>.
          </motion.h1>

          <motion.p variants={intro} className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            I’m {profile.name.split(' ')[0]}, a Full Stack Developer focused on building reliable, maintainable web
            applications, from intuitive frontend experiences to secure backend APIs and well-designed databases.
          </motion.p>

          <motion.ul variants={intro} className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5" aria-label="Primary technologies">
            {profile.primaryStack.map((tech) => (
              <li key={tech} className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft">
                <TechLogo name={tech} size={18} />
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={intro} className="mt-9 flex flex-wrap items-center gap-3">
            <Link to={{ pathname: '/', hash: '#work' }} className={buttonClasses.primary}>
              Explore my work
              <ArrowDownRight size={16} aria-hidden="true" />
            </Link>
            <Link to={{ pathname: '/', hash: '#contact' }} className={buttonClasses.secondary}>
              Get in touch
            </Link>
            <a href={profile.cv.href} download={profile.cv.fileName} className={buttonClasses.secondary}>
              Download CV
              <Download size={16} aria-hidden="true" />
              <span className="sr-only">(PDF)</span>
            </a>
            <div className="ml-1 flex items-center gap-1">
              <SocialIcon href={profile.github} label="GitHub">
                <Github size={18} aria-hidden="true" />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin size={18} aria-hidden="true" />
              </SocialIcon>
            </div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-6">
          <ProductCollage />
        </div>
      </div>

      <div className="page-x relative pb-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 lg:grid-cols-4">
          {atAGlance.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end gap-2">
              <dt className="max-w-[14rem] text-sm leading-snug text-ink-muted">{item.label}</dt>
              <dd className="font-serif text-5xl leading-none tracking-tight sm:text-6xl">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-10 w-10 items-center justify-center rounded-md text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
    >
      {children}
      <span className="sr-only">{label} (opens in a new tab)</span>
    </a>
  );
}

function CornerMarks() {
  const mark = 'absolute h-3 w-3 border-ink-faint';
  return (
    <div className="page-x pointer-events-none absolute inset-x-0 top-20 hidden lg:block" aria-hidden="true">
      <div className="relative">
        <span className={`${mark} left-0 top-0 border-l border-t`} />
        <span className={`${mark} right-0 top-0 border-r border-t`} />
      </div>
    </div>
  );
}
