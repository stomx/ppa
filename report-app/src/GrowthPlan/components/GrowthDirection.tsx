import type React from 'react';
import { BriefcaseIcon } from '../../PerformanceReport/components/Icons'; // Reusing Icon

const GrowthDirection: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden break-inside-avoid">
      <div className="bg-teal-600 p-4 flex items-center gap-3">
        <BriefcaseIcon className="text-white w-6 h-6" />
        <h2 className="text-lg font-bold text-white">1. 성장 방향 요약</h2>
      </div>
      <div className="p-6 md:p-8 text-slate-700 leading-relaxed space-y-4">
        <p>
          AX Studio 및 AX Agent 개발 과정에서 이미 수행해 온 프론트엔드 역할을 중심으로,
          <br />
          프론트엔드·백엔드 개발 경험과 AI Agent 구현 경험을 결합하여
          <br />
          <strong className="text-teal-700 bg-teal-50 px-1 rounded">
            AX 조직의 개발 경험(DX)을 정립하고 에이전트 제품 전반의 품질과 일관성을 높이는 데 기여
          </strong>
          하고자 함.
        </p>
        <p>
          기존 AI 웹서비스 및 Agent 구현 경험을 보유하고 있기에,
          <br />
          시행착오를 줄이고 AX의 제품 구조와 개발 단계에 적합한 DX 및 협업 방식을
          <br />
          <strong className="font-bold text-slate-900">
            비교적 빠르게 제안·정리할 수 있다는 점이 강점
          </strong>
          이라고 판단함.
        </p>
        <div className="mt-4 p-4 bg-slate-50 rounded-lg border-l-4 border-teal-500 text-sm md:text-base">
          기술적 안정성과 개발 효율의 확보는 <br className="md:hidden" />
          <strong className="text-slate-900">
            기능 구현 리드타임 단축, 변경 비용 감소, 비즈니스 의사결정 속도 향상으로 이어지는 기반
          </strong>
          이 됨.
        </div>
      </div>
    </section>
  );
};

export default GrowthDirection;
