import { useState } from "react";
import FuturePlan from "./FuturePlan";
import GrowthPlan from "./GrowthPlan";
import PerformanceReport from "./PerformanceReport";
import Presentation from "./Presentation";

function App() {
	const [currentView, setCurrentView] = useState<
		"report" | "plan" | "future" | "presentation"
	>("report");

	const isPresentation = currentView === "presentation";

	return (
		<div>
			{!isPresentation && (
				<nav className="sticky top-0 z-50 p-4 text-white shadow-md bg-slate-800">
					<div className="flex justify-between items-center mx-auto max-w-5xl">
						<div className="text-lg font-bold">Jaymon's Report</div>
						<div className="flex gap-2">
							<button
								type="button"
								onClick={() => setCurrentView("report")}
								className={`cursor-pointer px-4 py-2 rounded-lg transition-colors font-medium text-sm ${currentView === "report" ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700"}`}
							>
								성과 리포트
							</button>
							<button
								type="button"
								onClick={() => setCurrentView("future")}
								className={`cursor-pointer px-4 py-2 rounded-lg transition-colors font-medium text-sm ${currentView === "future" ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-700"}`}
							>
								성장 계획
							</button>
							{/* <button
								type="button"
								onClick={() => setCurrentView("presentation")}
								className="px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer text-slate-300 hover:bg-slate-700"
							>
								프레젠테이션
							</button> */}
						</div>
					</div>
				</nav>
			)}
			{currentView === "report" && <PerformanceReport />}
			{currentView === "plan" && <GrowthPlan />}
			{currentView === "future" && <FuturePlan />}
			{currentView === "presentation" && <Presentation />}
		</div>
	);
}

export default App;
