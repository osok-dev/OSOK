import React from "react";
import { ManageFunds } from "./pages/manage-funds";
import { Overview } from "./pages/overview";
import { HashRouter, Route, Routes } from "react-router-dom";
import { CreateJob } from "./pages/create-job";
import { Header } from "./header";

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/create-job" element={<CreateJob />} />
        <Route path="/manage-funds" element={<ManageFunds />} />
      </Routes>
    </HashRouter>
  );
};
