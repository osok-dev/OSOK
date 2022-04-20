import React from "react";
import { ManageFunds } from "./pages/manage-funds";
import { Overview } from "./pages/overview";
import { HashRouter, Route, Link, Routes } from "react-router-dom";
import { CreateJob } from "./pages/create-job";

export const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div>
        <ul>
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/create-job">Create Job</Link>
          </li>
          <li>
            <Link to="/manage-funds">Manage Funds</Link>
          </li>
        </ul>
        <hr />
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/create-job" element={<CreateJob />} />
          <Route path="/manage-funds" element={<ManageFunds />} />
        </Routes>
      </div>
    </HashRouter>
  );
};
