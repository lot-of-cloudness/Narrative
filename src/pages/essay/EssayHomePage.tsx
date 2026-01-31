import { useNavigate } from 'react-router-dom';

// 데이터 구조 분리
const ESSAY_HISTORY = [
  {
    id: 1,
    title: '네이버 브랜드 마케터',
    status: 'editing',
    date: '편집 중',
    active: true,
  },
  {
    id: 2,
    title: '삼성전자 영업직무',
    status: 'completed',
    date: '2023.10.20',
    active: false,
  },
];

const EssayHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen bg-[#F9F9F7] overflow-hidden">
      {/* 사이드바 영역 */}
      <aside className="w-70 h-full border-r border-[#E5E5E5] bg-[#F9F9F7] flex flex-col shrink-0">
        <div className="p-6 pb-4">
          <button
            onClick={() => navigate('/essay/job')}
            className="flex items-center justify-center gap-3 w-full p-3 bg-white border border-[#E5E5E5] rounded-xl text-[#4A4A4A] hover:border-[#7E9A86] hover:text-[#7E9A86] transition-all shadow-sm group cursor-pointer">
            <span className="text-[14px] font-semibold">자기소개서 만들기</span>
          </button>
        </div>

        {/* 진행 중인 리스트 (Nav) */}
        <nav className="flex-1 overflow-y-auto px-4">
          <h3 className="text-[#A0A0A0] text-[12px] font-bold mb-3 px-2 uppercase tracking-wider">
            진행 중인 이야기
          </h3>
          <ul className="space-y-1">
            {ESSAY_HISTORY.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full p-3 flex flex-col rounded-lg transition-colors text-left cursor-pointer group ${
                    item.active ? 'bg-[#EAEAE8]' : 'hover:bg-[#EAEAE8]/60'
                  }`}>
                  <span className="text-[#4A4A4A] text-[14px] font-medium line-clamp-1 group-hover:text-black">
                    {item.title}
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    {item.status === 'editing' && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7E9A86]" />
                    )}
                    <span className="text-[#A0A0A0] text-[12px]">
                      {item.date}
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* 사용자 정보 섹션 (Footer) */}
        <footer className="mt-auto p-4 border-t border-[#E5E5E5] flex items-center gap-3 bg-[#F9F9F7]">
          <div className="relative shrink-0">
            <img
              src="/api/placeholder/40/40"
              alt="사용자 프로필"
              className="w-10 h-10 rounded-full object-cover border border-[#E5E5E5]"
            />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-[#4A4A4A] truncate">
              사용자 이름
            </span>
            <span className="text-[11px] text-[#A0A0A0]">Premium Plan</span>
          </div>
          <button
            className="ml-auto p-1 text-[#A0A0A0] hover:text-[#4A4A4A] cursor-pointer"
            aria-label="Settings">
            {/* 설정 아이콘 등 필요한 요소가 들어갈 자리 */}
            <svg
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </footer>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <main className="flex-1 flex flex-col items-center justify-center p-12 animate-in fade-in duration-700 bg-[#F9F9F7]">
        <div className="max-w-md w-full text-center">
          <h2
            className="text-[24px] text-[#4A4A4A] mb-4 font-medium"
            style={{ fontFamily: 'Georgia, serif' }}>
            아직 정리된 경험 카드가 없네요
          </h2>

          <p className="text-[#8E8E93] text-[15px] leading-relaxed mb-10 break-keep">
            자소서를 쓰기 위해서는 재료가 필요합니다.
            <br />
            가벼운 인터뷰로 경험을 먼저 정리해보시는 건 어떨까요?
          </p>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => navigate('/interview')}
              className="px-10 py-3.5 bg-[#7E9A86] text-white rounded-full font-semibold text-[15px] hover:bg-[#6C8874] transition-all shadow-sm cursor-pointer active:scale-95">
              인터뷰 하러 가기
            </button>
            <button
              onClick={() => navigate('/essay/progress')}
              className="px-6 py-3.5 text-[#A0A0A0] hover:text-[#4A4A4A] transition-colors text-[15px] font-medium cursor-pointer">
              바로 작성하기
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EssayHomePage;
