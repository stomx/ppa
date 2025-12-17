import type React from 'react';
import GrowthDirection from './components/GrowthDirection';
import LongTermPlan from './components/LongTermPlan';
import MidTermPlan from './components/MidTermPlan';
import PlanHeader from './components/PlanHeader';
import ShortTermPlan from './components/ShortTermPlan';

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
