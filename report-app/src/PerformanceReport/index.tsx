import type React from 'react';
import Development from './components/Development';
import ExternalProjects from './components/ExternalProjects';
import Header from './components/Header';
import Impact from './components/Impact';
import Overview from './components/Overview';

const PerformanceReport: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-[#f8fafc]">
      <div className="min-h-screen p-4 md:p-8 text-slate-800 max-w-5xl mx-auto bg-[#f8fafc] font-sans">
        <Header />
        <main className="mt-8 space-y-8">
          <Overview />
          <Impact />
          <Development />
          <ExternalProjects />
        </main>
      </div>
    </div>
  );
};

export default PerformanceReport;
