import { useNavigate } from "react-router-dom";

export default function InterviewStartPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>인터뷰 설정</h1>
      <p>대화 톤과 캐릭터를 선택합니다.</p>
      <button onClick={() => navigate("/interview/icebreaking")}>
        캐릭터1
      </button>
      <button onClick={() => navigate("/interview/icebreaking")}>
        캐릭터2
      </button>
      <button onClick={() => navigate("/interview/icebreaking")}>
        캐릭터3
      </button>
    </main>
  );
}
