import { useNavigate } from 'react-router-dom';

type EssaySetupStep = 'job' | 'item' | 'card';

interface EssaySetupPageProps {
  step: EssaySetupStep;
}

/**
 * EssaySetupPage
 *
 * 목적:
 * - 자소서 생성을 위한 사전 정리 과정을 하나의 화면에 누적해서 보여준다.
 * - 사용자는 "단계를 넘긴다"기보다, 이야기를 계속 덧붙이는 경험을 한다.
 *
 * UX 원칙:
 * - 기존 내용을 숨기거나 교체하지 않는다.
 * - 화면은 아래 방향으로만 확장된다.
 * - 진행률, 단계 수 개념을 드러내지 않는다.
 */

export default function EssaySetupPage({ step }: EssaySetupPageProps) {
  const navigate = useNavigate();

  const goToItem = () => navigate('/essay/item');
  const goToCard = () => navigate('/essay/card');
  const goToCreate = () => navigate('/essay/create');

  return (
    <main>
      {/* 1. 직무 정리 섹션 (항상 표시) */}
      <section>
        <h1>어떤 방향으로 이야기를 정리해볼까요?</h1>
        {/* 직무 선택 UI */}
        <p>
          <input type="text" placeholder="직무를 입력해주세요" />
        </p>
      </section>

      {/* 2. 항목 정리 섹션 (item 이상에서 표시) */}
      {(step === 'item' || step === 'card') && (
        <section>
          <h2>이야기를 어떤 질문에 맞춰볼까요?</h2>
          {/* 문항 선택 UI */}
        </section>
      )}

      {/* 3. 경험 카드 섹션 (card에서만 표시) */}
      {step === 'card' && (
        <section>
          <h2>지금 떠오르는 경험들을 모아볼게요</h2>
          {/* 경험 카드 선택 UI */}
        </section>
      )}

      {/* 하단 액션 */}
      <footer>
        {step === 'job' && (
          <button
            className="cursor-pointer border border-black"
            onClick={goToItem}>
            이 방향으로 조금 더 정리해볼게요
          </button>
        )}

        {step === 'item' && (
          <button
            className="cursor-pointer border border-black"
            onClick={goToCard}>
            이 질문에 맞춰 이야기해볼게요
          </button>
        )}

        {step === 'card' && (
          <button
            className="cursor-pointer border border-black"
            onClick={goToCreate}>
            이 이야기들을 바탕으로 초안을 만들어볼게요
          </button>
        )}
      </footer>
    </main>
  );
}
