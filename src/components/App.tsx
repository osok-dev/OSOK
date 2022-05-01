import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./landing-page";
import { DashboardContainer } from "./dashboard";

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<DashboardContainer />} />
        <Route path="/about" element={<LandingPage />} />
      </Routes>
    </HashRouter>
  );
};
