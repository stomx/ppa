import type React from 'react';
import { CheckCircleIcon } from './Icons';

const ShortTerm: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">
        2. 단기 계획 (~3개월)
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
            2-1. AX Studio 프론트엔드 개발 역할 유지 및 안정화
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            AX Studio 개발 과정에서 맡아온 프론트엔드 역할을 지속하며,{' '}
            <strong className="font-bold text-slate-900">
              제품 개발 과정에서 프론트엔드 구현의 기준을 안정적으로 유지
            </strong>
            함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>AX Studio 전반의 화면 구조, 페이지 구성, 공통 컴포넌트 사용 방식 기준 유지</li>
            <li>누적된 구현 히스토리를 바탕으로 신규 기능 및 변경 사항을 일관된 방식으로 반영</li>
            <li>프론트엔드 변경으로 인한 불필요한 재작업 및 커뮤니케이션 비용 최소화</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
            2-2. 프론트엔드 개발 기준 및 DX 초안 정리
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            현재 명확히 정리되어 있지 않은 프론트엔드 개발 방식을 구체화하여,{' '}
            <strong className="font-bold text-slate-900">
              AX 조직에 적합한 개발 기준의 초안을 정리
            </strong>
            함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>프론트엔드 책임 범위(화면, 상태, 사용자 인터랙션) 명확화</li>
            <li>스키마 선행 정의, Mock/Fake API 활용 등 Frontend-Driven 개발 방식 정리</li>
            <li>
              프론트엔드–백엔드 병렬 개발이 가능한 작업 흐름 초안 수립
              <span className="block text-sm text-slate-500 mt-1">
                → 기능 단위 구현 리드타임 단축을 목표로 함
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ShortTerm;
