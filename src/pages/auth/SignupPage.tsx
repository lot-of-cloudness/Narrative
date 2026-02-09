import React from 'react';
import Input from '../../components/ui/Input';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';

export const SignupPage: React.FC = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 bg-bg-base">
      <div className="w-full max-w-110 bg-bg-sub rounded-2xl shadow-box border border-divider p-10 md:p-12 relative">
        <header className="text-center mb-12">
          <h1 className="font-serif text-[18px] text-text-primary leading-relaxed">
            당신의 이야기를 기록할 준비가 되셨나요?
          </h1>
        </header>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            id="name"
            label="이름"
            type="text"
            placeholder="이름을 입력해주세요"
            required
          />

          <Input
            id="email"
            label="이메일 주소"
            type="email"
            placeholder="example@email.com"
            required
          />

          <Input
            id="password"
            label="비밀번호"
            type="password"
            placeholder="8자리 이상 입력해주세요"
            required
          />

          <Input
            id="passwordConfirm"
            label="비밀번호 확인"
            type="password"
            placeholder="8자리 이상 입력해주세요"
            required
          />

          <div className="pt-6">
            <Button type="submit">시작하기</Button>
          </div>
        </form>

        <footer className="mt-10 text-center">
          <p className="text-sm text-text-secondary font-sans">
            이미 계정이 있으신가요?
            <Link
              to="/login"
              className="ml-2 font-bold text-text-primary underline underline-offset-4 decoration-divider hover:text-brand-sage hover:decoration-brand-sage transition-all cursor-pointer">
              로그인하기
            </Link>
          </p>
        </footer>
      </div>
    </main>
  );
};

export default SignupPage;
