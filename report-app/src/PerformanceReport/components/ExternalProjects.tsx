import type React from 'react';
import { BriefcaseIcon } from './Icons';

const ExternalProjects: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 border-b border-slate-200 pb-2 break-after-avoid mt-8">
        <BriefcaseIcon className="text-teal-600 w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-900">3. 외부 프로젝트(SI) 및 조직 기여</h2>
      </div>

      {/* 3-1 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2">3-1. SI 업무 지원 (w/로건)</h3>
        <p className="text-slate-600 mb-4">
          <strong className="text-slate-900">
            외부 고객사 대상 SI 업무를 지원하며, 납기 준수와 서비스 안정성을 확보하는 역할 수행
          </strong>
          .
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-lg">
            <strong className="block text-slate-800 mb-1">
              한국열연 브로셔 프로젝트 SI 업무 지원
            </strong>
            <ul className="list-disc list-inside text-sm text-slate-700 ml-1">
              <li>번역 데이터 적용 및 관련 기능 반영 완료</li>
              <li>웹앱 포팅 및 기능 보완을 통해 고객사 요구사항 충족</li>
            </ul>
          </div>
          <div className="p-4 bg-slate-50 rounded-lg">
            <strong className="block text-slate-800 mb-1">제일FA 프로젝트 수정 요청 대응</strong>
            <ul className="list-disc list-inside text-sm text-slate-700 ml-1">
              <li>기존 코드 및 기능 분석 후 요청사항 반영</li>
              <li>서비스 영향 최소화를 고려한 안정적 수정 처리</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 3-2 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2">
          3-2. 서비스 안정성 관련 대응 (w/로건)
        </h3>
        <ul className="list-disc list-inside text-sm text-slate-700 ml-2 space-y-1">
          <li>React / Next.js 주요 보안 취약점(CVE) 분석</li>
          <li>관련 패치 적용 및 라이브러리 업데이트 대응</li>
        </ul>
      </div>

      {/* 3-3 */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
        <h3 className="text-lg font-bold text-slate-800 mb-2">3-3. 개발 생산성 및 기술 자산화</h3>
        <p className="text-slate-600 mb-4">
          <strong className="text-slate-900">
            단발성 SI 작업에 그치지 않고, 반복 업무를 줄이기 위한 생산성 도구와 문서를 조직 자산으로
            정리
          </strong>
          함.
        </p>
        <ul className="list-disc list-inside text-sm text-slate-700 ml-2 space-y-2">
          <li>
            한국열연 브로셔 웹앱 포팅 과정에서{' '}
            <strong className="text-teal-700">WebApp Generator</strong> 개발
          </li>
          <li>반복 작업 자동화를 통해 이후 유사 프로젝트에 재사용 가능한 도구로 자산화</li>
          <li>컴포넌트 렌더링 프로세스, 데이터 흐름, API Migration 가이드 등 문서화</li>
          <li>프로젝트 루트 및 public 자산 관리 README 정리</li>
        </ul>
      </div>
    </section>
  );
};

export default ExternalProjects;
