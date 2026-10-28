import type { Preview } from '../../types/project';
import { BrowserFrame } from '../ui/BrowserFrame';

interface ProjectPreviewProps {
  preview: Preview;
  /** Load eagerly when the preview is above the fold. */
  eager?: boolean;
  showCaption?: boolean;
  /**
   * Force a frame aspect ratio (e.g. "2.2 / 1") so neighbouring previews line up.
   * The screenshot is fitted inside it, top-aligned, rather than cropped.
   */
  frameAspect?: string;
}

export function ProjectPreview({ preview, eager = false, showCaption = false, frameAspect }: ProjectPreviewProps) {
  return (
    <figure>
      <BrowserFrame address={preview.address} className="group-hover:border-line-strong">
        <div
          className="overflow-hidden bg-white"
          style={{ aspectRatio: frameAspect ?? `${preview.width} / ${preview.height}` }}
        >
          <img
            src={preview.src}
            alt={preview.alt}
            width={preview.width}
            height={preview.height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className={`h-full w-full object-top transition-transform duration-700 ease-out group-hover:scale-[1.015] ${
              frameAspect ? 'object-contain' : 'object-cover'
            }`}
          />
        </div>
      </BrowserFrame>
      <figcaption className={showCaption ? 'mt-3 text-sm text-ink-muted' : 'sr-only'}>{preview.caption}</figcaption>
    </figure>
  );
}
