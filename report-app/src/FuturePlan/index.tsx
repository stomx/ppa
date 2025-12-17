import type React from 'react';
import Header from './components/Header';
import LongTerm from './components/LongTerm';
import MidTerm from './components/MidTerm';
import ShortTerm from './components/ShortTerm';
import Summary from './components/Summary';

const FuturePlan: React.FC = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 text-slate-800 max-w-5xl mx-auto bg-[#f8fafc] font-sans">
      <Header />
      <main className="mt-8 space-y-8">
        <Summary />
        <ShortTerm />
        <MidTerm />
        <LongTerm />
      </main>
    </div>
  );
};

export default FuturePlan;
