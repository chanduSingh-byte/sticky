import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  LogOut,
  Users
} from 'lucide-react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <BarChart3 size={20} />, label: "Analytics", active: false },
    { icon: <Users size={20} />, label: "Team", active: false },
    { icon: <Layers size={20} />, label: "Projects", active: false },
    { icon: <Settings size={20} />, label: "Settings", active: false },
  ];

  return (
    <aside 
      className={`h-screen sticky top-0 bg-white border-r border-slate-200 transition-all duration-300 ease-in-out flex flex-col ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header / Collapse Toggle */}
      {/* <div className="p-4 mb-4 mt-8 flex items-center justify-between">
        {!isCollapsed && (
          <span className="font-bold text-xl text-indigo-600 px-2 tracking-tight">
            Nova<span className="text-slate-900">Lab</span>
          </span>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors mx-auto"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div> */}

      {/* Navigation Links */}
      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all group ${
              item.active 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            <div className={`${item.active ? 'text-indigo-600' : 'text-slate-400 group-hover:text-slate-900'}`}>
              {item.icon}
            </div>
            {!isCollapsed && (
              <span className="font-medium text-sm antialiased">{item.label}</span>
            )}
            
            {/* Tooltip for collapsed mode */}
            {isCollapsed && (
              <div className="absolute left-16 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom Profile/Logout Section */}
      <div className="p-4 border-t border-slate-100">
        <button className="w-full flex items-center gap-3 p-3 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors">
          <LogOut size={20} />
          {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;