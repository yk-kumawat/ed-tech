import React from 'react';

const ProgressItem = ({ label, percentage, color = "bg-green-500" }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-[10px] font-bold">
      <span>{label}</span>
      <span className="text-[#114b51]">{percentage}%</span>
    </div>
    <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
      <div className={color} style={{ width: `${percentage}%`, height: '100%' }}></div>
    </div>
  </div>
);

const RightSidebar = () => {
  return (
    /* Width reduced from w-80 to w-60 (25% reduction) */
    <aside className="w-65 bg-white border-l border-slate-200 p-4 space-y-6 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto custom-scrollbar">
      
      {/* Profile Mini Card - Reduced padding/gap */}
      <div className="bg-teal-50 p-3 rounded-2xl flex items-center gap-3">
        <div className="w-10 h-10 shrink-0 rounded-xl bg-teal-500 flex items-center justify-center text-white font-bold text-base">UN</div>
        <div className="min-w-0">
          <h4 className="font-bold text-slate-800 text-sm truncate">User Name</h4>
          <a className="text-[10px] text-[#114b51] font-medium hover:underline" href="#">Open Profile</a>
        </div>
      </div>

      {/* Streak Section */}
      <div className="space-y-3">
        <h5 className="text-xs font-bold opacity-70 flex items-center gap-2">
          <span className="material-icons-outlined text-orange-500 text-lg">local_fire_department</span> Streak: 2d
        </h5>
        <div className="flex items-center justify-between px-1">
          {[1, 2, 3, 4, 5].map((day) => (
            <div key={day} className="text-center">
              <span className={`material-icons text-base ${day <= 2 ? 'text-amber-400' : 'text-slate-200'}`}>star</span>
              <p className="text-[9px] font-medium text-slate-400">D{day}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Stats - Adjusted gap for narrow width */}
      <div className="space-y-3">
        <h5 className="text-xs font-bold opacity-70">Activity Score</h5>
        <div className="grid grid-cols-3 gap-2">
          {[
            { icon: 'auto_stories', val: '128', label: 'Lsn' },
            { icon: 'tour', val: '272', label: 'Ex' },
            { icon: 'psychology', val: '1', label: 'Qz' }
          ].map((stat, i) => (
            <div key={i} className="bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
              <span className="material-icons-outlined text-slate-400 text-base mb-0.5">{stat.icon}</span>
              <p className="text-sm font-bold">{stat.val}</p>
              <p className="text-[8px] text-slate-500 uppercase tracking-tighter">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Progress */}
      <div className="space-y-4">
        <h5 className="text-xs font-bold opacity-70">Progress</h5>
        <div className="space-y-4">
          <ProgressItem label="UI/UX" percentage={90} />
          <ProgressItem label="JS" percentage={85} />
          <ProgressItem label="HTML" percentage={70} />
          <ProgressItem label="CSS" percentage={100} />
        </div>
      </div>
      
    </aside>
  );
};

export default RightSidebar;