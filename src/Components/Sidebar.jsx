import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarSection = ({ title, children }) => (
  <div className="px-4">
    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 px-2">
      {title}
    </p>
    <nav className="space-y-1 text-slate-600">
      {children}
    </nav>
  </div>
);

const SidebarLink = ({ icon, label, to = "#", isDanger = false }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const activeClasses = "bg-[#114b51]/10 border-left-4 border-[#114b51] text-[#114b51] font-semibold";
  const dangerClasses = "hover:bg-red-50 text-red-600";
  const standardClasses = "hover:bg-slate-100";

  return (
    <Link 
      to={to} 
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive ? activeClasses : isDanger ? dangerClasses : standardClasses}`}
    >
      <span className="material-icons-outlined text-xl">{icon}</span>
      {label}
    </Link>
  );
};

const SideBar = () => {
  return (
    <aside className="w-60 bg-white border-r border-slate-200 flex flex-col justify-between py-6 sticky top-16 h-[calc(100vh-4rem)]">
      <div className="space-y-6">
        <SidebarSection title="Overview">
          <SidebarLink icon="dashboard" label="Dashboard" to="/dashboard" />
        </SidebarSection>

        <SidebarSection title="Learn">
          <SidebarLink icon="lightbulb" label="Tutorials" />
          <SidebarLink icon="bookmark_border" label="Bookmarks" to='/bookmarks'/>
          <SidebarLink icon="route" label="Learning Paths" to='/learning-path' />
        </SidebarSection>

        <SidebarSection title="Grow">
          <SidebarLink icon="school" label="Courses" to="/courses" />
          <SidebarLink icon="card_membership" label="Certificates" />
        </SidebarSection>

        <SidebarSection title="Practice">
          <SidebarLink icon="assignment" label="Practice Tests" />
          <SidebarLink icon="extension" label="Challenges" />
          <SidebarLink icon="laptop_mac" label="Interview Prep" />
        </SidebarSection>
      </div>

      <div className="px-4 mt-auto border-t border-slate-200 pt-6 space-y-1">
        <SidebarLink icon="settings" label="Settings" />
        <SidebarLink icon="logout" label="Logout" isDanger />
      </div>
    </aside>
  );
};

export default SideBar;
