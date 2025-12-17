import React from 'react';
import { BriefcaseIcon } from './Icons';

const Overview: React.FC = () => {
    return (
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden break-inside-avoid">
            <div className="bg-blue-600 p-4 flex items-center gap-3">
                <BriefcaseIcon className="text-white w-6 h-6" />
                <h2 className="text-lg font-bold text-white">1. 개요</h2>
            </div>
            <div className="p-6 md:p-8 text-slate-700 leading-relaxed space-y-4">
                <p>
                    적응기간 동안{' '}
                    <strong className="text-blue-700 bg-blue-50 px-1 rounded">
                        AX Studio 1.0을 외부 공개 및 운영 가능한 수준으로 완성하는 데 필요한 프론트엔드 전반 담당
                    </strong>
                    .
                </p>
                <p>
                    핵심 사용자 화면 구현을 기반으로, <strong className="font-bold text-slate-900">확장 가능한 UI 구조 수립</strong>,{' '}
                    <strong className="font-bold text-slate-900">핵심 비즈니스 도메인 설계 검증</strong>,{' '}
                    <strong className="font-bold text-slate-900">실서비스 전환 기준 정리</strong>,{' '}
                    <strong className="font-bold text-slate-900">문서화를 통한 조직 자산화</strong> 함께 수행.
                </p>
            </div>
        </section>
    );
};

export default Overview;
