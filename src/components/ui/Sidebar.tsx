import { useNavigate } from 'react-router-dom';

const interviewList = [
  { id: 1, title: '인터뷰 제목 1', date: '2026.01.01', status: '완료' },
  { id: 2, title: '인터뷰 제목 2', date: '2026.01.05', status: '진행중' },
];

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

export default function Sidebar({ page }: { page: 'interview' | 'essay' }) {
  const navigate = useNavigate();
  return (
    <>
      <aside className="w-64 flex flex-col border-r border-gray-200 px-4 py-6">
        {page === 'interview' && (
          <>
            <p className="sr-only">{page}</p>
            <button
              onClick={() => {
                navigate('/interview/start');
              }}
              className="w-full py-3 px-4 bg-brand-sage text-white rounded-lg font-bold hover:bg-brand-clay transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
              <span className="text-xl">+</span> 새 인터뷰 시작하기
            </button>

            <nav className="mt-8 flex-1 overflow-y-auto">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                최근 인터뷰 목록
              </h2>
              <ul className="space-y-1">
                {interviewList.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`/interview/${item.id}`}
                      className="group flex flex-col p-3 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-brand-sage">
                        {item.title}
                      </span>
                      <div className="flex justify-between items-center mt-1">
                        <time className="text-[11px] text-gray-400">
                          {item.date}
                        </time>
                        <span
                          className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                            item.status === '완료'
                              ? 'border border-brand-sage text-brand-sage'
                              : 'border border-brand-clay text-brand-clay'
                          }`}>
                          {item.status}
                        </span>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}

        {/* 디자인 통일된 ESSAY 섹션 */}
        {page === 'essay' && (
          <>
            <p className="sr-only">{page}</p>
            <button
              onClick={() => navigate('/essay/job')}
              // Interview 버튼과 동일한 클래스 적용
              className="w-full py-3 px-4 bg-brand-sage text-white rounded-lg font-bold hover:bg-brand-clay transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
              <span className="text-xl">+</span> 자기소개서 만들기
            </button>

            {/* Nav 영역 간격(mt-8) 및 스타일 통일 */}
            <nav className="mt-8 flex-1 overflow-y-auto">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">
                진행 중인 이야기
              </h3>
              <ul className="space-y-1">
                {ESSAY_HISTORY.map((item) => (
                  <li key={item.id}>
                    <button
                      // Interview 리스트 아이템과 동일한 구조 및 호버 효과 적용
                      className="w-full text-left group flex flex-col p-3 rounded-lg hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200 cursor-pointer">
                      <span className="text-sm font-medium text-gray-700 group-hover:text-brand-sage line-clamp-1">
                        {item.title}
                      </span>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-[11px] text-gray-400">
                          {item.date}
                        </span>
                        {/* 상태 배지 스타일 통일 */}
                        <span
                          className={`text-[11px] px-1.5 py-0.5 rounded-full border ${
                            item.status === 'editing'
                              ? 'border-brand-clay text-brand-clay' // editing -> 진행중 색상 매칭
                              : 'border-brand-sage text-brand-sage' // completed -> 완료 색상 매칭
                          }`}>
                          {item.status === 'editing' ? '편집중' : '완료'}
                        </span>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}

        {/* 사용자 정보 섹션 (공통) */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
          <div className="relative">
            <img
              src="../../src/img/usericon/user_icon.png"
              alt="사용자 프로필"
              className="w-10 h-10 rounded-full object-cover border border-gray-200"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-800">
              사용자 이름
            </span>
            <span className="text-xs text-gray-500">Premium Plan</span>
          </div>
          <button
            className="ml-auto p-1 text-[#A0A0A0] hover:text-[#4A4A4A] cursor-pointer"
            aria-label="Settings">
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
        </div>
      </aside>
    </>
  );
}
