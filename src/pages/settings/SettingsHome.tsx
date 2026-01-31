import React from 'react';

const SettingsHome: React.FC = () => {
  return (
    <div className="flex h-screen w-screen bg-[#F9F9F7] overflow-hidden">
      <div className="flex-1 flex flex-col p-8 sm:p-12 overflow-y-auto">
        <div className="max-w-2xl mx-auto w-full animate-in fade-in duration-700">
          <h2
            className="text-[24px] text-[#4A4A4A] mb-8"
            style={{ fontFamily: 'Georgia, serif' }}>
            설정
          </h2>

          <div className="space-y-8">
            {/* Profile Section */}
            <section>
              <h3 className="text-[#8E8E93] text-xs font-medium mb-3 uppercase tracking-wider">
                계정
              </h3>
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <div className="p-4 flex items-center gap-4 border-b border-[#E5E5E5]">
                  <div className="w-12 h-12 rounded-full bg-[#F2F2F2] flex items-center justify-center text-[#A0A0A0]">
                    프사
                  </div>
                  <div>
                    <p className="text-[#4A4A4A] font-medium">사용자님</p>
                    <p className="text-[#8E8E93] text-sm">user@example.com</p>
                  </div>
                </div>
                <button className="w-full p-4 text-left text-[#FF6B6B] hover:bg-[#FFF5F5] transition-colors text-sm flex items-center gap-2">
                  → 로그아웃
                </button>
              </div>
            </section>

            {/* Content Management */}
            <section>
              <h3 className="text-[#8E8E93] text-xs font-medium mb-3 uppercase tracking-wider">
                내 기록
              </h3>
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <button className="w-full p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors border-b border-[#E5E5E5]">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4A4A4A]">
                      저장된 경험 카드 목록
                    </span>
                  </div>
                </button>
                <button className="w-full p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-[#4A4A4A]">생성한 자소서 목록</span>
                  </div>
                </button>
              </div>
            </section>

            {/* Etc */}
            <section>
              <h3 className="text-[#8E8E93] text-xs font-medium mb-3 uppercase tracking-wider">
                기타
              </h3>
              <div className="bg-white rounded-xl border border-[#E5E5E5] overflow-hidden">
                <button className="w-full p-4 flex items-center justify-between hover:bg-[#FAFAFA] transition-colors">
                  <span className="text-[#4A4A4A]">회원 탈퇴</span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsHome;
