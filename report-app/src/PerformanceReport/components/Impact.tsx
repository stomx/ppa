import React from 'react';
import { ZapIcon } from './Icons';

const Impact: React.FC = () => {
    return (
        <section className="bg-slate-900 rounded-2xl p-8 text-white shadow-xl break-inside-avoid mt-8">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-700 pb-4">
                <ZapIcon className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold">4. 핵심 임팩트 요약</h2>
            </div>
            <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        1
                    </span>
                    <span className="text-slate-200">
                        AX Studio 1.0을{' '}
                        <strong className="text-yellow-400">
                            외부 공개 및 운영이 가능한 수준으로 고도화하는 데 기여
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
                            확장 가능한 UI·도메인 구조 및 개발 표준 수립
                        </strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        3
                    </span>
                    <span className="text-slate-200">
                        Frontend-Driven 개발 및 Migration Guide를 통해{' '}
                        <strong className="text-yellow-400">개발 병목 및 전환 리스크 감소</strong>
                    </span>
                </li>
                <li className="flex items-start gap-3 text-lg leading-relaxed">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-700 text-slate-300 text-xs font-bold mt-1 shrink-0">
                        4
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
