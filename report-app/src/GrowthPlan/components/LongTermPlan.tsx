import type React from 'react';
import { ZapIcon } from '../../PerformanceReport/components/Icons';

const LongTermPlan: React.FC = () => {
  return (
    <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl break-inside-avoid mt-8">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
        <ZapIcon className="w-6 h-6 text-yellow-400" />
        <h2 className="text-2xl font-bold">4. 중·장기 계획 (~12개월)</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            4-1. 풀스택 관점의 에이전트 제품 품질 기여
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            프론트엔드뿐 아니라 백엔드 개발 경험을 보유한 풀스택 개발자로서,
            <strong className="text-slate-200">
              {' '}
              에이전트 개발 과정 전반을 고려한 품질 개선에 기여
            </strong>
            함.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="text-sm border-l-2 border-slate-700 pl-3">설계·구현 간 괴리 최소화</li>
            <li className="text-sm border-l-2 border-slate-700 pl-3">
              Agent 로직, 데이터 흐름, UI 인터랙션 정합성 체크
            </li>
            <li className="text-sm border-l-2 border-slate-700 pl-3">
              사용자 경험과 시스템 동작을 통합 고려
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-slate-100 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            4-2. 개발 자산 및 경험 축적
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-4">
            개인의 경험에 의존하지 않고,{' '}
            <strong className="text-slate-200">
              AX 조직 내에 개발 기준과 맥락이 지속적으로 누적되는 구조를 유지
            </strong>
            함.
          </p>
          <ul className="space-y-2 text-slate-300">
            <li className="text-sm border-l-2 border-slate-700 pl-3">
              구현 패턴 및 설계 판단의 지속적 문서화
            </li>
            <li className="text-sm border-l-2 border-slate-700 pl-3">
              신규 인원 온보딩을 위한 자산 유지
            </li>
            <li className="text-sm border-l-2 border-slate-700 pl-3">
              공통 컴포넌트 및 기준 문서를 통한 비용 절감
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LongTermPlan;
