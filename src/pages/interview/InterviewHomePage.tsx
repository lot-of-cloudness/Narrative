// const InterviewHome: React.FC = () => {
//   return (
//     <main className="flex">
//       {/* 사이드바 */}
//       <aside className="w-64 h-screen px-4 pt-4 border-r border-gray-300">
//         <button className="w-full py-2 px-4 bg-brand-sage text-white rounded-md hover:bg-brand-clay transition-colors cursor-pointer">
//           + 새 인터뷰 시작하기
//         </button>
//         <ul className="mt-4 space-y-2" style={{ border: '1px solid black' }}>
//           <li>
//             <a href="" rel="noopener noreferrer">
//               <span>인터뷰 제목</span>
//               <span>2026.01.01</span>
//               <span>완료/진행중</span>
//             </a>
//           </li>
//           <li>인터뷰 목록2</li>
//           <li>인터뷰 목록3</li>
//           <li>인터뷰 목록4</li>
//         </ul>
//         <div
//           className="w-10/12 mt-auto flex items-center gap-2 py-2 "
//           style={{ border: '1px solid blue' }}>
//           {/* 사용자 정보 표시 */}
//           <img
//             src="../../src/img/usericon/user_icon.png"
//             alt="userIcon"
//             className="w-10 h-10 rounded-full aspect-auto object-cover"
//             style={{ border: '1px solid red' }}
//           />
//           <span>사용자이름</span>
//         </div>
//       </aside>
//       <section className="flex justify-center w-full">
//         {/* 타이틀 섹션 */}
//         <div
//           className="flex flex-col justify-center items-center gap-6 text-center transition-opacity duration-1000"
//           style={{ border: 'solid 1px black' }}>
//           <p className="mb-3 text-[15px] font-normal text-text-secondary font-sans">
//             인터뷰를 시작하여 당신의 이야기를 정리해보세요.
//           </p>
//           <p className="text-[19px] leading-relaxed text-text-primary font-serif">
//             대화를 통해 경험을 구조화하고, 자기소개서 작성에 활용할 수 있습니다.
//           </p>
//           <button className="flex h-14 w-96 items-center justify-center rounded-full bg-brand-sage px-8 text-[17px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-san cursor-pointer">
//             + 새 인터뷰 시작하기
//           </button>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default InterviewHome;

const InterviewHomePage = () => {
  // 실제 데이터 구조를 가정해 본 예시 데이터입니다.
  const interviewList = [
    { id: 1, title: '인터뷰 제목 1', date: '2026.01.01', status: '완료' },
    { id: 2, title: '인터뷰 제목 2', date: '2026.01.05', status: '진행중' },
  ];

  return (
    <main className="flex min-h-screen">
      {/* 사이드바 */}
      <aside className="w-64 flex flex-col border-r border-gray-200 px-4 py-6">
        <button className="w-full py-3 px-4 bg-brand-sage text-white rounded-lg font-bold hover:bg-brand-clay transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer">
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

        {/* 사용자 정보 섹션 */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center gap-3">
          <div className="relative">
            <img
              src="/api/placeholder/40/40" // 실제 경로: "../../src/img/usericon/user_icon.png"
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
        </div>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8 animate-fade-in">
          <header className="space-y-4">
            <p className="text-brand-sage font-semibold tracking-wide uppercase text-sm">
              Experience Archiving
            </p>
            <h1 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
              대화를 통해 당신의 경험을 <br />
              <span className="text-brand-sage">논리적인 구조</span>로
              만들어보세요.
            </h1>
            <p className="text-gray-500 text-lg max-w-md mx-auto font-sans">
              준비된 질문에 답하기만 하세요. <br />
              나머지는 저희가 자기소개서 초안으로 정리해 드립니다.
            </p>
          </header>

          <button className="group relative flex h-16 w-80 items-center justify-center overflow-hidden rounded-full bg-brand-sage px-8 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-clay hover:scale-[1.02] active:scale-95 cursor-pointer">
            <span>+ 새 인터뷰 시작하기</span>
            <div className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </button>

          {/* <div className="grid grid-cols-3 gap-8 w-full pt-12 border-t border-gray-100">
            <div className="flex flex-col items-center italic text-gray-400 text-sm">
              #경험구조화
            </div>
            <div className="flex flex-col items-center italic text-gray-400 text-sm">
              #AI코칭
            </div>
            <div className="flex flex-col items-center italic text-gray-400 text-sm">
              #자소서완성
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default InterviewHomePage;
