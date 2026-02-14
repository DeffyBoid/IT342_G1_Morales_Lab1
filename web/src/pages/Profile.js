import React from "react";
import PageWithNavbar from "../components/PageWithNavbar";

function Profile() {
  const username = localStorage.getItem("username") || "User";

  return (
    <PageWithNavbar>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Password:</strong> ********</p>
    </PageWithNavbar>
  );
}

export default Profile;