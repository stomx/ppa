import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between border-b-2 border-slate-200 pb-6 gap-4">
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
          AX 조직 내 성장 계획
        </h1>
      </div>
    </header>
  );
};

export default Header;
