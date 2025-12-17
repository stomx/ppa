import type React from 'react';
import { CalendarIcon } from './Icons';

const MidTerm: React.FC = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b pb-2">
        3. 중기 계획 (~6개월)
      </h2>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-indigo-500" />
            3-1. 프론트엔드–백엔드 간 인터페이스 기준 정립
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            프론트엔드와 백엔드가 각자의 영역에 집중할 수 있도록,{' '}
            <strong className="font-bold text-slate-900">
              인터페이스 기준을 정리하고 합의 가능한 형태로 정착
            </strong>
            시키는 데 기여함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>API 스펙, 요청·응답 구조, 에러 처리 방식에 대한 기준 정리</li>
            <li>Migration Guide 및 관련 문서를 통해 변경 시 혼선 최소화</li>
            <li>
              신규 기능 개발 시 병렬 개발이 가능한 협업 구조 유지
              <span className="block text-sm text-slate-500 mt-1">
                → 기능 추가 및 변경 시 커뮤니케이션 비용 감소
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-indigo-500" />
            3-2. AX Agent 및 Agent Builder 개발 맥락 기여
          </h3>
          <p className="text-slate-700 mb-3 pl-8">
            AX가 AI Agent 및 Agent Builder를 핵심 제품으로 발전시키는 과정에서,{' '}
            <strong className="font-bold text-slate-900">
              기존에 보유한 Agentic AI 구현 경험을 실제 개발 논의와 설계 판단에 연결
            </strong>
            함.
          </p>
          <ul className="list-disc list-outside ml-12 text-slate-600 space-y-1">
            <li>STT, LLM, TTS, VAD 기반 AI 웹서비스 및 Agent 구현 경험 공유</li>
            <li>Agent 실행 흐름, 상태 관리, 사용자 인터랙션 설계에 대한 실무 관점 의견 제공</li>
            <li>Agent Builder 사용 흐름에 대한 프론트엔드·UX 관점 피드백 제공</li>
          </ul>
          <p className="text-slate-700 mt-3 pl-8 bg-indigo-50 p-2 rounded text-sm">
            이 과정을 통해{' '}
            <strong className="font-bold text-indigo-900">
              Agent 기반 UI 및 인터페이스 설계에 대한 전문성을 조직 내에서 축적
            </strong>
            하는 것을 목표로 함.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MidTerm;
