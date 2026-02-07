import React from 'react';
import Header from '../Components/Header';
import SideBar from '../Components/Sidebar';
import RightSidebar from '../Components/RightSidebar';

const LearningPath = () => {
  return (
    <div className="bg-[#f8fafc] text-slate-900 h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <Header/>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <SideBar/>

        {/* Main Content */}
        <main className="flex-1 overflow-y-scroll h-full p-8 lg:p-12 font-['Inter',sans-serif] no-scrollbar">
          <div className="max-w-4xl mx-auto">
            {/* Path Header */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div>
                  <h2 className="text-4xl font-bold tracking-tight text-[#1c454e] mb-4">UI/UX Design Specialist</h2>
                  <p className="text-slate-500 max-w-2xl leading-relaxed text-lg">
                    Master the art of creating stunning user interfaces and seamless user experiences. This path covers everything from fundamental design theory to advanced prototyping techniques.
                  </p>
                </div>
                <div className="flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Path Progress</p>
                    <p className="text-3xl font-bold text-[#1c454e]">65%</p>
                  </div>
                  <div className="w-16 h-16 rounded-full border-4 border-slate-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full border-4 border-[#2dd4bf] border-t-transparent -rotate-45"></div>
                    <span className="material-symbols-outlined text-[#2dd4bf]">trending_up</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Path Timeline */}
            <div className="relative">
              {/* Vertical Spine */}
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-200 rounded-full overflow-hidden -translate-x-1/2">
                <div className="bg-[#2dd4bf] w-full shadow-[0_0_15px_rgba(45,212,191,0.5)] transition-all duration-700" style={{ height: '65%' }}></div>
              </div>

              <div className="space-y-16 relative z-10">
                {/* Milestone 1: Completed */}
                <div className="flex items-center justify-center w-full">
                  <div className="w-1/2 pr-12 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-[#1c454e] mb-2">Design Thinking</h3>
                    <p className="text-slate-500 text-sm">Understanding user needs and the iterative problem-solving process.</p>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#2dd4bf] flex items-center justify-center border-4 border-white shadow-lg ring-4 ring-[#2dd4bf]/20 transition-transform hover:scale-110">
                      <span className="material-symbols-outlined text-white text-2xl font-bold">check</span>
                    </div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Completed
                    </div>
                  </div>
                </div>

                {/* Milestone 2: Completed */}
                <div className="flex items-center justify-center w-full">
                  <div className="w-1/2 pr-12 text-right">
                    <div className="items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider hidden md:inline-flex">
                      Completed <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#2dd4bf] flex items-center justify-center border-4 border-white shadow-lg ring-4 ring-[#2dd4bf]/20">
                      <span className="material-symbols-outlined text-white text-2xl font-bold">check</span>
                    </div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="py-5 rounded-2xl">
                      <h3 className="text-xl font-bold text-[#1c454e] mb-2">Wireframing</h3>
                      <p className="text-slate-500 text-sm">Low-fidelity blueprints focusing on layout structure.</p>
                    </div>
                  </div>
                </div>

                {/* Milestone 3: Active/Current */}
                <div className="flex items-center justify-center w-full">
                  <div className="w-1/2 pr-12 text-right hidden md:block">
                    <h3 className="text-2xl font-bold text-[#1c454e] mb-2">Prototyping</h3>
                    <p className="text-slate-500 text-base">Creating interactive flows to test usability and animation sequences.</p>
                  </div>
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-[#1c454e] flex items-center justify-center border-4 border-white shadow-xl ring-8 ring-[#1c454e]/10 transition-transform hover:scale-105">
                      <span className="material-symbols-outlined text-[#ffcc33] text-4xl">play_circle</span>
                    </div>
                    <div className="absolute inset-0 rounded-full bg-[#1c454e]/20 animate-ping"></div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-[#1c454e]/20">
                      <button className="w-full bg-[#1c454e] text-white font-bold py-3 px-6 rounded-xl hover:bg-slate-800 transition-all">Resume Path</button>
                    </div>
                  </div>
                </div>

                {/* Milestone 4: Locked */}
                <div className="flex items-center justify-center w-full">
                  <div className="w-1/2 pr-12 text-right hidden md:block">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-xs font-bold uppercase tracking-wider">
                      <span className="material-symbols-outlined text-sm">lock</span> Locked
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center border-4 border-white shadow-sm">
                      <span className="material-symbols-outlined text-slate-400 text-2xl">lock</span>
                    </div>
                  </div>
                  <div className="w-1/2 pl-12">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100">
                      <h3 className="text-xl font-bold text-slate-400 mb-2">Design Systems</h3>
                      <p className="text-slate-400 text-sm">Building scalable UI libraries and components.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <RightSidebar/>
      </div>
    </div>
  );
};

export default LearningPath;