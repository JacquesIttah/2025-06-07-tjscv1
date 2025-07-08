import React, { lazy, Suspense } from 'react';

const LazyFlexHorizontFirstGrow = lazy(() => import('./FlexHorizontFirstGrow'));

const FlexHorizontFirstGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexHorizontFirstGrow {...props} />
  </Suspense>
);

export default FlexHorizontFirstGrow;
