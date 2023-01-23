import { Link } from 'react-router-dom';

import pageNotFoundIll from '@/assets/page-not-found.svg';

export function NoMatchScreen() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center text-center">
        <img
          src={pageNotFoundIll}
          className="h-48"
          alt="Page not found illustration"
        />
        <h1 className="mt-6 text-center text-4xl font-bold">
          Nothing to see here!
        </h1>
        <Link className="mt-4 text-indigo-500" to="/">
          Go to the home page &rarr;
        </Link>
      </div>
    </div>
  );
}
