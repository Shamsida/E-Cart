import React from 'react';
import AdminHeader from '../AdminPanel/AdminHeader';
import { Outlet } from 'react-router';

function Admin() {
  return (
    <div>
      <AdminHeader />
      <Outlet/>
    </div>
  )
}

export default Admin