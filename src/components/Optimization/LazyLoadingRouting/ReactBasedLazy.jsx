import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomeComponent from "./HomeComponent";
import { Suspense, lazy } from "react";

const ContactComponent = lazy(() => import("./ContactComponent"));

const RoutingBasedLazy = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading.....</div>}>
          <Routes>
            <Route path="/" element={<HomeComponent />} />

            <Route path="/Contact" element={<ContactComponent />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default RoutingBasedLazy;
