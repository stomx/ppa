import { useState } from 'react';
import PerformanceReport from './PerformanceReport';
import GrowthPlan from './GrowthPlan';

function App() {
  const [currentView, setCurrentView] = useState<'report' | 'plan'>('report');

  return (
    <div>
      <nav className="bg-slate-800 text-white p-4 shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="font-bold text-lg">Jaymon's Report</div>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentView('report')}
              className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${currentView === 'report' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              성과 리포트
            </button>
            <button
              onClick={() => setCurrentView('plan')}
              className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm ${currentView === 'plan' ? 'bg-teal-600 text-white' : 'text-slate-300 hover:bg-slate-700'}`}
            >
              성장 계획
            </button>
          </div>
        </div>
      </nav>
      {currentView === 'report' ? <PerformanceReport /> : <GrowthPlan />}
    </div>
  );
}

export default App;
