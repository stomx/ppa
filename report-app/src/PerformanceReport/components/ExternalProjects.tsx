import React from 'react';
import { UsersIcon, LayersIcon, FileTextIcon, ChevronRightIcon, ShieldIcon } from './Icons';

const ExternalProjects: React.FC = () => {
    return (
        <section className="space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-2 break-after-avoid mt-8">
                <UsersIcon className="text-blue-600 w-8 h-8" />
                <h2 className="text-2xl font-bold text-slate-900">3. 외부 프로젝트(SI) 및 조직 기여</h2>
            </div>
            <div className="flex flex-col gap-6">
                {/* 3-1 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 break-inside-avoid">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <LayersIcon className="w-5 h-5 text-teal-600" /> 3-1. SI 업무 지원
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">
                        <strong className="text-slate-900">
                            외부 고객사 대상 SI 업무를 지원하며, 납기 준수와 서비스 안정성을 확보하는 역할을 수행
                        </strong>
                        .
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <div className="font-bold text-slate-800 mb-2">한국열연 브로셔 프로젝트 SI 업무 지원</div>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
                                <li>번역 데이터 적용 및 관련 기능 반영 완료</li>
                                <li>웹앱 포팅 및 기능 보완을 통해 고객사 요구사항 충족</li>
                            </ul>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                            <div className="font-bold text-slate-800 mb-2">제일FA 프로젝트 수정 요청 대응</div>
                            <ul className="list-disc list-inside text-sm text-slate-600 space-y-1 ml-2">
                                <li>기존 코드 및 기능 분석 후 요청사항 반영</li>
                                <li>서비스 영향 최소화를 고려한 안정적 수정 처리</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3-2 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 break-inside-avoid">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <FileTextIcon className="w-5 h-5 text-teal-600" /> 3-2. 개발 생산성 및 기술 자산화
                    </h3>
                    <p className="text-slate-600 mb-4 text-sm">
                        <strong className="text-slate-900">
                            단발성 SI 작업에 그치지 않고, 반복 업무를 줄이기 위한 생산성 도구와 문서를 조직 자산으로 남김
                        </strong>
                        .
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>
                                한국열연 브로셔 웹앱 포팅 과정에서{' '}
                                <strong className="text-teal-700">
                                    <a href="https://github.com/uglysmith/webapp-generator" target="_blank" rel="noreferrer">
                                        WebApp Generator
                                    </a>
                                </strong>{' '}
                                개발
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>반복 작업 자동화를 통해 이후 유사 프로젝트에 재사용 가능한 도구로 자산화</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>
                                Agent 렌더링 프로세스, Pricing 도메인 및 API 가이드, Migration Guide 문서화
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <ChevronRightIcon className="w-4 h-4 text-teal-500 mt-0.5 shrink-0" />
                            <span>프로젝트 루트 및 public 자산 관리 README 정리</span>
                        </li>
                    </ul>
                </div>

                {/* 3-3 */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 break-inside-avoid">
                    <h3 className="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2">
                        <ShieldIcon className="w-5 h-5 text-red-500" /> 3-3. 서비스 안정성 확보 (w/로건)
                    </h3>
                    <div className="rounded-lg flex items-start gap-3">
                        <ChevronRightIcon className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-sm">React / Next.js 주요 보안 취약점(CVE) 분석 및 패치 적용</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExternalProjects;
