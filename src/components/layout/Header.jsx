import React, { useState } from 'react';
import { Search, Bell, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white">
        <div className="flex items-center gap-4 flex-1">
          <button 
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 bg-gray-50 rounded-md text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-end gap-6 flex-1">
          <div className="relative">
            <button className="relative flex items-center justify-center w-10 h-10 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary-500 rounded-full" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-primary-100 rounded-full flex items-center justify-center">
              <span className="font-medium text-primary-700 text-sm">JD</span>
            </div>
            <button className="w-9 h-9 bg-secondary-600 rounded-full flex items-center justify-center text-white">
              <span className="font-bold text-lg">+</span>
            </button>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export function DashboardHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
      <h1 className="text-xl md:text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-600">This Week</span>
          <span className="text-gray-400">▼</span>
        </div>
        
        <div className="md:ml-6">
          <div className="flex items-center gap-1">
            <h2 className="text-lg font-medium">October 2021</h2>
            <div className="flex ml-6">
              <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-500" />
              </button>
              <button className="p-1 rounded-md hover:bg-gray-100 transition-colors">
                <ChevronRight className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;