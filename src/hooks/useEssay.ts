import { useState, useEffect } from 'react';

export const useEssay = () => {
  const [essayData, setEssayData] = useState(null);

  // 에세이 관련 로직

  return {
    essayData,
    setEssayData,
  };
};
