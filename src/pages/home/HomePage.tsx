import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center gap-12 p-4">
      {/* 타이틀 섹션 */}
      <div className="animate-fade-in mb-8 text-center transition-opacity duration-1000">
        <p className="mb-3 text-[15px] font-normal text-text-secondary font-sans">
          당신의 경험을 대화로 정리하는 공간
        </p>
        <p className="text-[19px] leading-relaxed text-text-primary font-serif">
          지금 상태 그대로 시작해도 괜찮아요
        </p>
      </div>

      {/* 액션 버튼 섹션 */}
      <div className="flex w-full max-w-sm flex-col items-center gap-8">
        {/* 인터뷰 시작하기 버튼 그룹 */}
        <div className="flex w-full flex-col items-center gap-3">
          <Link
            to="/interview"
            className="flex h-14 w-full items-center justify-center rounded-full bg-brand-sage px-8 text-[17px] font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg font-sans">
            새로운 인터뷰 시작하기
          </Link>
          <p className="text-sm text-gray-500">
            대화를 통해 당신의 이야기를 정리해보세요.
          </p>
        </div>

        {/* 구분선 (선택사항 - 시각적 분리가 필요하다면 사용) */}
        {/* <div className="w-full border-t border-gray-100"></div> */}

        {/* 자기소개서 생성 링크 그룹 */}
        <div className="flex flex-col items-center gap-2">
          <Link
            to="/essay"
            className="text-[15px] text-text-tertiary underline underline-offset-4 transition-colors duration-300 hover:text-[#8E8E93] font-sans">
            자기소개서 생성
          </Link>
          <p className="text-sm text-gray-400">
            정리한 경험으로 자기소개서를 만들어보세요.
          </p>
        </div>
      </div>
    </main>
  );
}
