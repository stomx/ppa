import React from 'react';
const Header: React.FC = () => {
    return (
        <header className="flex flex-col md:flex-row items-center justify-between border-b-2 border-slate-200 pb-6 gap-4">
            <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">적응 기간 성과 요약</h1>
            </div>
        </header>
    );
};

export default Header;
