//import { LazyComponent } from "./LazyComponent";
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export const ReactLazyComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading....</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};
