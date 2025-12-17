import React from 'react';
import { ZapIcon } from './Icons';

const Impact: React.FC = () => {
    return (
        <section className="bg-sky-950 rounded-2xl p-8 text-white shadow-xl break-inside-avoid mt-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                <ZapIcon className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">1. 핵심 임팩트 요약</h2>
            </div>
            <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        1
                    </span>
                    <span className="text-slate-200">
                        AX Studio 1.0을{' '}
                        <strong className="text-yellow-400">
                            외부 공개를 목표로 한 프론트엔드 사용자 화면 및 기반 구현
                        </strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        2
                    </span>
                    <span className="text-slate-200">
                        프론트엔드 관점에서{' '}
                        <strong className="text-yellow-400">
                            확장 가능한 UI 구조 및 개발 기준 정리
                        </strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        3
                    </span>
                    <span className="text-slate-200">
                        API 연동이 필요한 부분에서{' '}
                        <strong className="text-yellow-400">비즈니스 로직 및 스키마 선행 설계를 통한 병렬 개발 및 커뮤니케이션 비용 감소</strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        4
                    </span>
                    <span className="text-slate-200">
                        Fake API 기반 검증과 연동 가이드 정리를 통해{' '}
                        <strong className="text-yellow-400">
                            실제 서비스 연동 단계의 개발 리스크 완화
                        </strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        5
                    </span>
                    <span className="text-slate-200">
                        SI 업무 지원과 생산성 도구화를 통해{' '}
                        <strong className="text-yellow-400">
                            조직 단위 개발 효율 및 지속 가능성 확보
                        </strong>
                    </span>
                </li>
            </ul>
        </section>
    );
};

export default Impact;
