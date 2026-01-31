import React from 'react';

export const SignupPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 bg-bg-base">
      <div className="w-full max-w-110 bg-bg-sub rounded-2xl shadow-box border border-divider p-10 md:p-12 relative">
        <header className="text-center mb-12">
          <h1 className="font-serif text-[22px] text-text-primary leading-relaxed">
            당신의 이야기를 기록할
            <br />
            준비가 되셨나요?
          </h1>
        </header>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-text-primary ml-1"
              htmlFor="name">
              이름
            </label>
            <input
              id="name"
              type="text"
              placeholder="이름을 입력해주세요"
              className="w-full px-4 py-3.5 rounded-xl border border-divider bg-white focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none transition-all text-sm text-text-primary placeholder:text-text-disabled"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-text-primary ml-1"
              htmlFor="email">
              이메일 주소
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-3.5 rounded-xl border border-divider bg-white focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none transition-all text-sm text-text-primary placeholder:text-text-disabled"
              required
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-text-primary ml-1"
              htmlFor="password">
              비밀번호 설정
            </label>
            <input
              id="password"
              type="password"
              placeholder="8자리 이상 입력해주세요"
              className="w-full px-4 py-3.5 rounded-xl border border-divider bg-white focus:ring-1 focus:ring-brand-sage focus:border-brand-sage outline-none transition-all text-sm text-text-primary placeholder:text-text-disabled"
              required
            />
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="w-full h-14 bg-brand-sage text-white font-bold rounded-full shadow-button hover:bg-brand-sage/90 active:scale-[0.98] transition-all cursor-pointer">
              시작하기
            </button>
          </div>
        </form>

        <footer className="mt-10 text-center">
          <p className="text-sm text-text-secondary font-sans">
            이미 계정이 있으신가요?
            <a
              href="/login"
              className="ml-2 font-bold text-text-primary underline underline-offset-4 decoration-divider hover:text-brand-sage hover:decoration-brand-sage transition-all cursor-pointer">
              로그인하기
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default SignupPage;
