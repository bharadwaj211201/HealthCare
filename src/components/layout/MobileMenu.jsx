import React from 'react';
import { navItems } from '../../data/mockData';
import { cn } from '../../lib/utils';

export function MobileMenu({ isOpen, onClose }) {
  return (
    <div className={cn(
      "fixed inset-0 z-50 md:hidden",
      isOpen ? "block" : "hidden"
    )}>
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold">
            <span className="text-primary-500">Health</span>
            <span className="text-gray-700">care.</span>
          </h2>
        </div>
        <nav className="flex-1 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item, index) => (
            item.section ? (
              <div key={`mobile-section-${index}`} className="px-4 pt-5 pb-2">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                  {item.section}
                </h3>
              </div>
            ) : (
              <MobileNavLink key={`mobile-${item.href}`} item={item} />
            )
          ))}
        </nav>
      </div>
    </div>
  );
}

function MobileNavLink({ item }) {
  const isActive = item.href === '/';
  
  return (
    <a
      href={item.href}
      className={cn(
        "relative flex items-center gap-3 px-4 h-12 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors",
        isActive && "text-primary-600 bg-primary-50 font-medium"
      )}
    >
      {isActive && (
        <div className="absolute left-0 w-1 h-6 bg-primary-500 rounded-r-full" />
      )}
      <span className="flex items-center justify-center w-5 h-5">
        <item.icon className="w-5 h-5" />
      </span>
      <span>{item.title}</span>
    </a>
  );
}

export default MobileMenu;