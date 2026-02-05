import { Link } from 'react-router-dom';

export default function InterviewResultPage() {
  return (
    <main>
      <h1>경험 카드 생성 완료</h1>
      <p>정리된 경험을 확인합니다.</p>
      <div>경험카드 : 경험 내용, 내용에서 볼 수 있는 강점, 강점 키워드</div>
      <Link to={'/essay/job'}>
        생성 된 경험 카드로 자기소개서를 작성해 볼까요?
      </Link>
    </main>
  );
}
