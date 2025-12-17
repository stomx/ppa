import React from 'react';
import { UsersIcon, ChevronRightIcon } from '../../PerformanceReport/components/Icons';

const MidTermPlan: React.FC = () => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-2 break-after-avoid mt-8">
                <UsersIcon className="text-teal-600 w-8 h-8" />
                <h2 className="text-2xl font-bold text-slate-900">3. 중기 계획 (~6개월)</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* 3-1 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-teal-100 text-teal-800 text-xs font-bold px-2 py-1 rounded-full">Interface & Collaboration</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                        3-1. 프론트엔드–백엔드 간 인터페이스 기준 정립
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                        프론트엔드와 백엔드가 각자의 영역에 집중할 수 있도록, <strong className="text-slate-900">인터페이스 기준을 정리하고 합의 가능한 형태로 정착</strong>시킴.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>API 스펙, 요청·응답 구조, 에러 처리 방식 기준 정리</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>Migration Guide 및 관련 문서를 통한 혼선 최소화</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>병렬 개발이 가능한 협업 구조 유지 (커뮤니케이션 비용 감소)</span>
                        </li>
                    </ul>
                </div>

                {/* 3-2 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-full">Product Contribution</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3">
                        3-2. AX Agent 및 Agent Builder 개발 맥락 기여
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                        AX가 AI Agent 제품으로 발전하는 과정에서, <strong className="text-slate-900">기존 Agentic AI 구현 경험을 실제 개발 논의와 설계 판단에 연결</strong>함.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>STT, LLM, TTS, VAD 기반 AI 웹서비스 경험 공유</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>Agent 실행 흐름 및 사용자 인터랙션 설계 의견 제공</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>Agent Builder UX에 대한 프론트엔드 관점 피드백</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MidTermPlan;
