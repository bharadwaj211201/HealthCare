import React from 'react';
import Sidebar from './Sidebar';
import { Header } from './Header';

export function Layout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

export default Layout;