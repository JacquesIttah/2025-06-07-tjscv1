import React, { lazy, Suspense } from 'react';

const LazyFlexVerticalThirdGrow = lazy(() => import('./FlexVerticalThirdGrow'));

const FlexVerticalThirdGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexVerticalThirdGrow {...props} />
  </Suspense>
);

export default FlexVerticalThirdGrow;
