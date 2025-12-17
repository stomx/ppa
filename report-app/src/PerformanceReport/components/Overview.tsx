import React from 'react';
import { TargetIcon } from './Icons';

const Overview: React.FC = () => {
    return (
        <section className="bg-white rounded-xl shadow-md border-l-4 border-sky-950 p-6 md:p-8 break-inside-avoid">
            <div className="flex items-center gap-3 mb-4">
                <TargetIcon className="w-8 h-8 text-blue-600" />
                <h2 className="text-xl font-bold text-slate-900">0. 한 줄 개요 (Overview)</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed">
                적응기간 동안 <strong className="font-bold text-sky-800 bg-blue-50 px-1 rounded">AX Studio 1.0을 외부 공개 및 실제 운영이 가능한 제품 수준으로 완성하기 위한 프론트엔드 전반을 담당</strong>하며,
                확장 가능한 UI 구조 수립, 비즈니스 로직 및 스키마 선행 설계, 백엔드 개발자와 병렬 개발 협업,
                <strong className="font-bold text-slate-900"> 실서비스 연동을 고려한 프론트엔드 전환 준비 및 가이드 정리</strong>,
                문서화를 통한 조직 자산화를 수행함.
            </p>
        </section>
    );
};

export default Overview;
