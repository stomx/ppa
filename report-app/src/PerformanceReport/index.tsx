import React from 'react';
import Header from './components/Header';
import Overview from './components/Overview';
import Development from './components/Development';
import ExternalProjects from './components/ExternalProjects';
import Impact from './components/Impact';

const PerformanceReport: React.FC = () => {
    return (
        <div className="min-h-screen p-4 md:p-8 text-slate-800 max-w-5xl mx-auto bg-[#f8fafc] font-sans">
            <Header />
            <main className="mt-8 space-y-8">
                <Overview />
                <Development />
                <ExternalProjects />
                <Impact />
            </main>
        </div>
    );
};

export default PerformanceReport;
