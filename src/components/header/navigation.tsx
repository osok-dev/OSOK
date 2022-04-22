import React from "react";
import { Link } from "react-router-dom";

export const Navigation: React.FC = () => {
  return (
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
  );
};
