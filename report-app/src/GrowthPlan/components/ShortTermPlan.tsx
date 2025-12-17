import type React from 'react';
import { ChevronRightIcon, CodeIcon } from '../../PerformanceReport/components/Icons';

const ShortTermPlan: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-2 break-after-avoid mt-8">
        <CodeIcon className="text-teal-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-900">2. 단기 계획 (~3개월)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 2-1 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
            2-1. AX Studio 프론트엔드 개발 역할 유지 및 안정화
          </h3>
          <p className="text-slate-600 text-sm mb-4 flex-grow">
            AX Studio 개발 과정에서 맡아온 프론트엔드 역할을 지속하며,
            <strong className="text-slate-900">
              {' '}
              제품 개발 과정에서 프론트엔드 구현의 기준을 안정적으로 유지
            </strong>
            함.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>화면 구조, 페이지 구성, 공통 컴포넌트 기준 유지</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>누적된 히스토리 기반의 신규 기능 및 변경 사항 반영</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>재작업 및 커뮤니케이션 비용 최소화</span>
            </li>
          </ul>
        </div>

        {/* 2-2 */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
          <h3 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">
            2-2. 프론트엔드 개발 기준 및 DX 초안 정리
          </h3>
          <p className="text-slate-600 text-sm mb-4 flex-grow">
            명확히 정리되어 있지 않은 개발 방식을 구체화하여,
            <strong className="text-slate-900"> AX 조직에 적합한 개발 기준의 초안을 정리</strong>함.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg">
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>프론트엔드 책임 범위(화면, 상태, 인터랙션) 명확화</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>Frontend-Driven 개발 방식 및 스키마 선행 정의</span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
              <span>병렬 개발이 가능한 작업 흐름 초안 (리드타임 단축)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShortTermPlan;
