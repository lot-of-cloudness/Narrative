import { Link } from 'react-router-dom';

// 경험 카드 임시 데이터
const MOCK_CARDS = [
  {
    id: 1,
    title: '삼성전자 인턴십 : 마케팅 전략 수립',
    date: '2023.10.20',
    keywords: ['협업', '데이터분석'],
  },
  {
    id: 2,
    title: '교내 해커톤 대상 수상',
    date: '2023.08.15',
    keywords: ['리더십', '문제해결'],
  },
];

export default function EssayHomePage() {
  const hasCards = MOCK_CARDS.length > 0;

  return (
    <section
      className="flex-1 flex items-center justify-center p-8"
      aria-label="자기소개서 작성 메인 섹션">
      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8 animate-fade-in">
        <header className="space-y-4">
          {hasCards ? (
            <>
              {/* 경험 카드가 있을 때 노출 */}
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                총{' '}
                <span className="text-brand-sage">{MOCK_CARDS.length}개</span>의
                경험 카드가 준비되어 있어요!
              </h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto font-sans leading-relaxed break-keep">
                이제 이 소중한 재료들을 활용해서 <br />
                나만의 자기소개서를 완성해볼까요?
              </p>
            </>
          ) : (
            <>
              {/* 경험카드가 없을 때 노출*/}
              <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                아직 정리된 경험 카드가 없네요
              </h2>
              <p className="text-gray-500 text-lg max-w-md mx-auto font-sans leading-relaxed break-keep">
                자소서를 쓰기 위해서는 재료가 필요합니다. <br />
                가벼운 인터뷰로 경험을 먼저 정리해보시는 건 어떨까요?
              </p>
            </>
          )}
        </header>

        {hasCards && (
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
            {MOCK_CARDS.map((card) => (
              <li key={card.id}>
                <article className="h-full bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-sage/50 transition-all text-left group cursor-default">
                  <div className="flex flex-col h-full justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-gray-800 text-lg group-hover:text-brand-sage transition-colors line-clamp-2">
                        {card.title}
                      </h3>
                      <time className="text-xs text-gray-400 mt-1 block">
                        {card.date}
                      </time>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {card.keywords.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[11px] rounded-md font-medium group-hover:bg-brand-sage/10 group-hover:text-brand-sage transition-colors">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {/* 메인 액션 (Primary) - 카드 유무에 따라 목적지 변경 */}
          <Link
            to={hasCards ? '/essay/job' : '/interview'} // 카드가 있으면 -> 자소서 작성, 없으면 -> 인터뷰
            className="group relative flex h-14 w-60 items-center justify-center overflow-hidden rounded-full bg-brand-sage text-white text-[15px] font-bold shadow-lg transition-all hover:bg-brand-clay hover:scale-[1.02] active:scale-95">
            <span className="relative z-10">
              {hasCards ? '자기소개서 작성하기' : '인터뷰 하러 가기'}
            </span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]"
              aria-hidden="true">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>
          {/* 보조 액션 (Secondary) */}
          <Link
            to={hasCards ? '/interview' : '/essay/job'}
            className="px-6 py-3.5 text-gray-400 hover:text-gray-600 transition-colors text-[15px] font-medium">
            {hasCards ? '인터뷰 더 하기' : '바로 작성하기'}
          </Link>
        </div>
      </div>
    </section>
  );
}
