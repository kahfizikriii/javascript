import React from "react";
import { Outlet } from "react-router-dom";
import DashboardMenu from "../../components/DashboardMenu";

const Dashboard = () => (
  <div className="dashboard">
    <DashboardMenu />
    <div className="dashboard-content">
      <Outlet />
    </div>
  </div>
);

export default Dashboard;
