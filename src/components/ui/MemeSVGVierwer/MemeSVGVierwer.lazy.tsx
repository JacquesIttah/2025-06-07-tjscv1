import React, { lazy, Suspense } from 'react';

const LazyMemeSvgVierwer = lazy(() => import('./MemeSvgVierwer'));

const MemeSvgVierwer = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMemeSvgVierwer {...props} />
  </Suspense>
);

export default MemeSvgVierwer;
