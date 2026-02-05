import { useNavigate } from 'react-router-dom';

export default function InterviewProgressPage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>인터뷰 진행 중</h1>
      <p>질문과 응답이 오가는 메인 화면</p>
      <form action="">
        <textarea name="" id="" placeholder="가벼운 마음으로 작성해주세요." />
        <button>입력</button>
      </form>
      <button onClick={() => navigate('/interview/result')}>인터뷰 종료</button>
    </main>
  );
}
