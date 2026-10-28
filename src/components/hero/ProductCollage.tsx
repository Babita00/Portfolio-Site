import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Preview } from '../../types/project';
import { getProject } from '../../utils/projects';
import { BrowserFrame } from '../ui/BrowserFrame';

interface Shot {
  slug: string;
  name: string;
  previewIndex: number;
  className: string;
  /** Where the name tag sits, chosen so a frame in front never covers it. */
  labelClassName: string;
  delay: number;
}

// Back to front. Positions are percentages of a square stage so the collage scales with its column.
const shots: Shot[] = [
  {
    slug: 'international-education',
    name: 'In-Country Representative',
    previewIndex: 0,
    className: 'right-0 top-0 w-[80%]',
    labelClassName: '-top-3 right-4',
    delay: 0.15,
  },
  {
    slug: 'prepbox',
    name: 'Prepbox',
    previewIndex: 0,
    className: 'left-0 top-[31%] w-[68%]',
    labelClassName: '-bottom-3 left-4',
    delay: 0.3,
  },
  {
    slug: 'interview-for-you',
    name: 'Interview For You',
    previewIndex: 0,
    className: 'bottom-[2%] right-[3%] w-[74%]',
    labelClassName: '-bottom-3 left-4',
    delay: 0.45,
  },
];

/** Overlapping screenshots of real products; each one opens its case study. */
export function ProductCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]">
      {shots.map((shot) => {
        const preview = getProject(shot.slug)?.previews[shot.previewIndex];
        if (!preview) return null;
        return <CollageShot key={shot.name} shot={shot} preview={preview} />;
      })}
    </div>
  );
}

function CollageShot({ shot, preview }: { shot: Shot; preview: Preview }) {
  return (
    <motion.div
      className={`absolute hover:z-10 ${shot.className}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: shot.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/work/${shot.slug}`}
        className="group relative block transition-transform duration-300 hover:-translate-y-1"
      >
        <BrowserFrame address={preview.address} className="group-hover:border-ink">
          <img
            src={preview.src}
            alt=""
            width={preview.width}
            height={preview.height}
            loading="eager"
            decoding="async"
            className="block h-auto w-full"
          />
        </BrowserFrame>
        <span className={`absolute ${shot.labelClassName} rounded-full bg-ink px-3 py-1 text-[0.6875rem] font-medium text-paper shadow-md transition-colors group-hover:bg-accent`}>
          {shot.name}
          <span className="sr-only"> case study</span>
        </span>
      </Link>
    </motion.div>
  );
}
