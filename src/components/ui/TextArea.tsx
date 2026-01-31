import React from "react";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return <textarea value={value} onChange={(e) => onChange(e.target.value)} />;
};
