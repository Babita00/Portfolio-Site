import { skillGroups } from '../../data/skills';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TechLogo } from '../ui/TechLogo';

export function TechStack() {
  return (
    <section id="tech-stack" className="border-y border-line bg-paper-card" aria-labelledby="tech-stack-title">
      <div className="page-x py-24 sm:py-32">
        <SectionHeading
          id="tech-stack-title"
          index="02"
          label="Tech stack"
          title="The tools I build with."
          intro="Everything here is used in the projects above, from the screens users see to the databases behind them."
        />

        <div className="mt-14 space-y-12">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04} className="grid gap-5 lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-3">
                <h3 className="text-lg font-semibold">{group.title}</h3>
                <p className="mt-1 max-w-xs text-sm leading-snug text-ink-muted">{group.plain}</p>
              </div>
              <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:col-span-9 xl:grid-cols-5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-h-[6.5rem] flex-col items-center justify-center gap-3 rounded-lg border border-line bg-paper px-3 py-4 text-center transition-colors duration-200 hover:border-ink"
                  >
                    <TechLogo name={item} size={30} />
                    <span className="text-sm font-medium leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
