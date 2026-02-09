import React from 'react';
import Input from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const LoginPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center p-6 bg-bg-base">
      <div className="w-full max-w-110 bg-bg-sub rounded-2xl shadow-box border border-divider p-10 md:p-12 relative">
        {/* 헤더 섹션 */}
        <header className="text-center mb-12">
          <h1 className="font-serif text-[24px] md:text-[28px] font-normal text-text-primary tracking-tight">
            다시 만나서 반가워요
          </h1>
        </header>

        {/* 로그인 폼 */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="email"
            label="이메일 주소"
            placeholder="name@example.com"
            type="email"
            autoComplete="email"
            required
          />

          <Input
            id="password"
            label="비밀번호"
            placeholder="••••••••"
            type="password"
            autoComplete="current-password"
            required
          />

          <div className="pt-4">
            <Button type="submit">로그인하기</Button>
          </div>
        </form>

        {/* 하단 링크 네비게이션 */}
        <footer className="mt-10 space-y-4 text-center">
          <div>
            <Link
              to="/forgot-password"
              className="text-sm text-text-secondary hover:text-text-primary
              transition-colors cursor-pointer underline-offset-4
              hover:underline">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
          <div className="text-sm text-text-secondary">
            아직 회원이 아니신가요?
            <Link
              to="/signup"
              className="ml-2 font-bold text-text-primary hover:text-brand-sage underline underline-offset-4 decoration-divider hover:decoration-brand-sage transition-all cursor-pointer">
              회원가입하기
            </Link>
          </div>
        </footer>
      </div>

      {/* 브랜드 로고 (푸터 외부) */}
      <div className="mt-12 text-center opacity-40">
        <span className="font-serif font-bold text-text-disabled text-lg tracking-widest uppercase">
          Narrative
        </span>
      </div>
    </main>
  );
};

export default LoginPage;
