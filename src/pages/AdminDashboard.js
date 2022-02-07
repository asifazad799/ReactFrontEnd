import React from 'react';
import Dashboard from '../components/students/adminDashboard/AdminDashboard';
import DashboardBody from '../components/students/adminDashboard/AdminDashboardBody'

function AdminDashboard() {
  return(

      <div>
        {/* <AdminMainPage/> */}
        <Dashboard title="Dashboard">
          <DashboardBody/>     
        </Dashboard>
      </div>

  )
}

export default AdminDashboard;

