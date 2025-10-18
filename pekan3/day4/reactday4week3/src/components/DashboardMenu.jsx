import React from "react";
import { NavLink } from "react-router-dom";

const DashboardMenu = () => (
  <aside className="dash-menu">
    <NavLink to="/dashboard/profile">Profile</NavLink>
    <NavLink to="/dashboard/settings">Settings</NavLink>
  </aside>
);

export default DashboardMenu;
