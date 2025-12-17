import React from 'react';
import PlanHeader from './components/PlanHeader';
import GrowthDirection from './components/GrowthDirection';
import ShortTermPlan from './components/ShortTermPlan';
import MidTermPlan from './components/MidTermPlan';
import LongTermPlan from './components/LongTermPlan';

const GrowthPlan: React.FC = () => {
    return (
        <div className="min-h-screen p-4 md:p-8 text-slate-800 max-w-5xl mx-auto bg-[#f8fafc] font-sans">
            <PlanHeader />
            <main className="mt-8 space-y-8">
                <GrowthDirection />
                <ShortTermPlan />
                <MidTermPlan />
                <LongTermPlan />
            </main>
        </div>
    );
};

export default GrowthPlan;
