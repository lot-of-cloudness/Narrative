import { useState, useEffect } from 'react';

export const useInterview = () => {
  const [interviewData, setInterviewData] = useState(null);

  // 인터뷰 관련 로직

  return {
    interviewData,
    setInterviewData,
  };
};
