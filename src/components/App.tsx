import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { Dashboard } from "./dashboard";

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};
