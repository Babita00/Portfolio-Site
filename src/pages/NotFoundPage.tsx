import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import { buttonClasses } from '../components/ui/styles';

export function NotFoundPage() {
  usePageMeta('Page not found · Babita Awasthi', 'This page does not exist.');

  return (
    <section className="page-x flex min-h-[80vh] flex-col justify-center py-32">
      <p className="label">404</p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight sm:text-7xl">This page doesn’t exist.</h1>
      <p className="mt-5 max-w-md text-ink-soft">The link may be outdated. The project case studies are all listed on the home page.</p>
      <div className="mt-8">
        <Link to={{ pathname: '/', hash: '#work' }} className={buttonClasses.primary}>
          View all work
        </Link>
      </div>
    </section>
  );
}
