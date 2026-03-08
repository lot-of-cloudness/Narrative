import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

/**
 * 공통 Input 컴포넌트
 * - label 지원
 * - 모든 input 속성(props) 전달 가능
 * - 로그인 / 회원가입에서 재사용
 */
export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}

      <input
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        {...props}
      />
    </div>
  );
}
