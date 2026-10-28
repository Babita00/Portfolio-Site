import { certification, education } from '../../data/experience';
import { profile } from '../../data/profile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const facts = [
  { label: 'Based in', value: profile.location },
  { label: 'Currently', value: `Mid-Level Full Stack Developer, ${profile.company}` },
  { label: 'Education', value: `${education.degree}, ${education.school}` },
  { label: 'Certification', value: certification.name },
];

export function About() {
  return (
    <section id="about" className="border-y border-line bg-paper-card" aria-labelledby="about-title">
      <div className="page-x py-24 sm:py-32">
        <SectionHeading
          id="about-title"
          index="04"
          label="About"
          title="I like the part of software where business rules meet data."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="space-y-5 text-base leading-relaxed text-ink-soft sm:text-lg lg:col-span-6 lg:col-start-4">
            <p>
              I’m a full stack developer based in {profile.location}. I started as an intern in February 2025 and now work
              as a mid-level developer, building production platforms for exam preparation, higher-education networks and
              sports academies.
            </p>
            <p>
              Most of the problems I enjoy are rules that must hold under real use: a booking slot that can never be sold
              twice, permissions that span many institutions, an exam that has to submit on time. I turn those rules into
              clear schemas, typed APIs and interfaces people can use without a manual.
            </p>
            <p>
              Outside my role I build products on my own, end to end. Interview For You and the In-Country Representative
              platforms taught me to own every layer, from the data model to deployment, and to make technical decisions
              with the people who will use the software in mind.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((fact) => (
                <div key={fact.label} className="py-4">
                  <dt className="label">{fact.label}</dt>
                  <dd className="mt-1.5 text-sm leading-snug text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
