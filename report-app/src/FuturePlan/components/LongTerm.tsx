import type React from 'react';
import { LightBulbIcon } from './Icons';

// Re-trigger build

const LongTerm: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">
        4. 중·장기 계획 (~12개월)
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <LightBulbIcon className="w-6 h-6 text-amber-500" />
            4-1. 풀스택 관점의 에이전트 제품 품질 기여
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            프론트엔드뿐 아니라 백엔드 개발 경험을 보유한 풀스택 개발자로서,{' '}
            <strong className="font-bold text-slate-900">
              에이전트 개발 과정 전반을 고려한 품질 개선에 기여
            </strong>
            함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>프론트엔드–백엔드 경계를 모두 이해한 상태에서 설계·구현 간 괴리 최소화</li>
            <li>Agent 실행 로직, 데이터 흐름, UI 인터랙션 간 정합성 관점의 기술적 피드백 제공</li>
            <li>기능 단위가 아닌, 사용자 경험과 시스템 동작을 함께 고려한 품질 판단 기여</li>
          </ul>
          <p className="text-slate-700 mt-3 pl-8 bg-amber-50 p-2 rounded text-sm">
            이를 통해{' '}
            <strong className="font-bold text-amber-900">
              AX 조직 내에서 에이전트 개발에 있어 풀스택 관점의 기술적 판단이 가능한 개발자로서의
              역할을 강화
            </strong>
            하고자 함.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <LightBulbIcon className="w-6 h-6 text-amber-500" />
            4-2. 개발 자산 및 경험 축적
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            개인의 경험에 의존하지 않고,{' '}
            <strong className="font-bold text-slate-900">
              AX 조직 내에 개발 기준과 맥락이 지속적으로 누적되는 구조를 유지
            </strong>
            함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>프론트엔드·백엔드·Agent 개발 경험, 설계 판단, 구현 패턴의 문서화</li>
            <li>신규 인원이 합류하더라도 빠르게 맥락을 이해할 수 있는 개발 자산 유지</li>
            <li>공통 컴포넌트 및 개발 기준 문서를 통해 온보딩 비용 절감에 기여</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LongTerm;
