import { Link } from 'react-router-dom';

export default function InterviewHomePage() {
  return (
    <section
      className="flex-1 flex items-center justify-center p-8"
      aria-label="인터뷰 시작 메인 섹션">
      <div className="max-w-2xl w-full flex flex-col items-center text-center space-y-8">
        <header className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
            대화를 통해 <br /> 당신의 경험을 정리해보세요.
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto font-sans">
            준비된 질문에 가볍게 답변해주세요. <br />
            당신의 답변에서 의미를 발견해드려요.
          </p>
        </header>

        <Link
          to="/interview/start"
          className="group relative flex h-16 w-80 items-center justify-center overflow-hidden rounded-full bg-brand-sage px-8 text-lg font-bold text-white shadow-xl transition-all hover:bg-brand-clay hover:scale-[1.02] active:scale-95">
          <span>+ 새 인터뷰 시작하기</span>
          <div
            className="absolute inset-0 flex h-full w-full justify-center transform-[skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:transform-[skew(-12deg)_translateX(100%)]"
            aria-hidden="true">
            <div className="relative h-full w-8 bg-white/20" />
          </div>
        </Link>
      </div>
    </section>
  );
}
