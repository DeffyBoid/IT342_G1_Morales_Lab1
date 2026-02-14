import React from "react";
import PageWithNavbar from "../components/PageWithNavbar";

function Dashboard() {
  const username = localStorage.getItem("username") || "User";

  return (
    <PageWithNavbar>
      <h2>Welcome to the Dashboard, {username}!</h2>
    </PageWithNavbar>
  );
}

export default Dashboard;