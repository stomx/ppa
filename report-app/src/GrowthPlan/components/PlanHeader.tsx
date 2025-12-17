import type React from 'react';

const PlanHeader: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between border-b-2 border-slate-200 pb-6 gap-4">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          AX 조직 내 성장 계획
        </h1>
        <p className="text-slate-500 mt-2">
          프론트엔드 전문성을 기반으로 한 AX 제품 품질 향상 및 조직 성장 기여
        </p>
      </div>
    </header>
  );
};

export default PlanHeader;
