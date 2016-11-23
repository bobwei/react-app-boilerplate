import React from 'react';
import NavigationBar from '../NavigationBar';

const Layout = ({ children }) => (
  <div>
    <NavigationBar />
    {children}
  </div>
);

export default Layout;
