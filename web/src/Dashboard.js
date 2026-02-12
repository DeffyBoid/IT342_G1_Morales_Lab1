import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const username = location.state?.username || 'User';

  return (
    <div className="Dashboard">
      <h2>Welcome to the Dashboard {username} </h2>
      <div className='dashboardbox'>
          <Link to="/logout"><button>Logout</button></Link>
      </div>
    </div>
  );
}

export default Dashboard;