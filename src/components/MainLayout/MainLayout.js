import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;