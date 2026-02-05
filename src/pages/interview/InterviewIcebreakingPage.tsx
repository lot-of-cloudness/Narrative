import { useNavigate } from 'react-router-dom';

export default function InterviewIcebreakingPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>아이스브레이킹</h1>
      <p>가볍게 대화를 시작합니다.</p>
      <form action="">
        <textarea name="" id="" placeholder="가벼운 마음으로 작성해주세요." />
        <button onClick={() => navigate('/interview/progress')}>입력</button>
      </form>
    </main>
  );
}
