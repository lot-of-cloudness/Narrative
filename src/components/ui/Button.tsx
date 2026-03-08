import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'submit';
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * 공통 Button 컴포넌트
 * - 모든 button 속성 사용 가능
 * - 기본 스타일 통일
 */

export const Button = ({ type, children, onClick, ...props }: ButtonProps) => {
  return (
    <button
      className="w-full h-14 mt-4 bg-brand-sage text-white font-bold rounded-full shadow-button hover:bg-brand-sage/90 active:scale-[0.98] transition-all cursor-pointer"
      type={type}
      onClick={onClick}
      {...props}>
      {children}
    </button>
  );
};
