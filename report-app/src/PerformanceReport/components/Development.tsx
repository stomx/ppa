import React from 'react';
import { CodeIcon } from './Icons';

const Development: React.FC = () => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-2 break-after-avoid mt-8">
                <CodeIcon className="text-blue-600 w-8 h-8" />
                <h2 className="text-2xl font-bold text-slate-900">2. AX Studio 1.0 제품 개발</h2>
            </div>

            {/* 2-1 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden break-inside-avoid">
                <div className="p-6 border-b border-slate-100 bg-slate-50">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800 mb-2">
                        2-1. 프론트엔드 아키텍처 및 UI 시스템 구축
                    </h3>
                    <p className="text-slate-600">
                        <strong className="text-slate-900">
                            AX Studio 1.0의 실제 제품 운영을 전제로 한 프론트엔드 아키텍처와 공통 UI 시스템 구축
                        </strong>
                        .
                    </p>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-slate-100">
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 w-24 sm:w-32 align-top">역할</th>
                                    <td className="py-4 text-slate-800">프론트엔드 구현 및 프론트엔드 아키텍처 구성</td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">기준</th>
                                    <td className="py-4 text-slate-800">
                                        실제 제품 런칭을 목표로 확정된 디자인 및 기능 정의 기준 적용
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">구현 범위</th>
                                    <td className="py-4 text-slate-800">
                                        공통 사용 컴포넌트·템플릿 설계 및 구현
                                        <div className="mt-1 text-slate-600 bg-slate-100 bg-opacity-50 p-2 rounded">
                                            페이지 구현 - 랜딩, 에이전트 목록, 에이전트 상세, 요금-구독, 요금-크레딧, 오버뷰,
                                            개인정보처리방침, 이용약관
                                        </div>
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">핵심 성과</th>
                                    <td className="py-4 text-slate-800 font-semibold text-blue-700">
                                        확장 가능한 공통 UI 시스템(Container, Layout) 기반 구축
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">완성 수준</th>
                                    <td className="py-4 text-slate-800">
                                        실제 서비스 사용을 전제로 한 UI 안정화 및 반응형 대응
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">기타</th>
                                    <td className="py-4 text-slate-800">
                                        AX Agent 기능 개발 과정 내 i18n 아키텍처 구조 반영 (현재 한국어 기준 운영)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 2-2 */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden break-inside-avoid">
                <div className="p-6 border-b border-slate-100 bg-slate-50">
                    <h3 className="text-lg font-bold flex items-center gap-2 text-slate-800 mb-2">
                        2-2. 핵심 비즈니스 도메인 설계 및 연동 표준화
                    </h3>
                    <p className="text-slate-600">
                        <strong className="text-slate-900">
                            Agent 및 Pricing 영역의 핵심 비즈니스 로직에 대해 프론트엔드 관점에서 선행 설계와 연동 기준을
                            정립
                        </strong>
                        .
                    </p>
                </div>
                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <tbody className="divide-y divide-slate-100">
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 w-24 sm:w-32 align-top">대상</th>
                                    <td className="py-4 text-slate-800">Agent / Category / Pricing</td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">설계</th>
                                    <td className="py-4 text-slate-800">데이터 스키마 선행 설계</td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">개발 방식</th>
                                    <td className="py-4 text-slate-800">
                                        Frontend-Driven 개발 프로세스 적용 (스키마 기반 화면·로직 병렬 개발)
                                    </td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">검증</th>
                                    <td className="py-4 text-slate-800">Fake API 기반 기능 검증 및 UI 완성</td>
                                </tr>
                                <tr className="group hover:bg-slate-50">
                                    <th className="py-4 pr-4 font-bold text-slate-600 align-top">전환</th>
                                    <td className="py-4 text-slate-800 font-semibold text-blue-700">
                                        Fake API 제거 후 실제 DB·비즈니스 로직 연동을 위한 Migration Guide 작성
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Development;
