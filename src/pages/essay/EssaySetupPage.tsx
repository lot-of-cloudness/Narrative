import { useState } from 'react';
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

  const [selectedJob, setSelectedJob] = useState('none');
  const [customJob, setCustomJob] = useState('');

  const [selectedQuestion, setSelectedQuestion] = useState('none');
  const [customQuestion, setCustomQuestion] = useState('');

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedJob(e.target.value);
  };

  return (
    <main>
      {/* 1. 직무 정리 섹션 (항상 표시) */}
      <section>
        <h1 hidden>어떤 직무로 자기소개서를 작성해 볼까요?</h1>
        <label htmlFor="job">어떤 직무로 자기소개서를 작성해 볼까요?</label>
        <select
          id="job"
          name="job-choice"
          value={selectedJob}
          onChange={handleSelectChange}>
          <option value="none">직무를 선택해주세요.</option>

          <optgroup label="기획·전략">
            <option value="strategy">경영기획·전략</option>
            <option value="pm">서비스 기획·PM</option>
            <option value="marketing-strategy">마케팅 기획</option>
          </optgroup>

          <optgroup label="마케팅·홍보">
            <option value="digital-marketing">디지털 마케팅</option>
            <option value="sns-marketing">콘텐츠·SNS 마케팅</option>
            <option value="pr">홍보·PR</option>
            <option value="performance-marketing">퍼포먼스 마케팅</option>
          </optgroup>

          <optgroup label="영업·고객상담">
            <option value="sales-domestic">국내영업</option>
            <option value="sales-overseas">해외영업</option>
            <option value="md">영업관리·MD</option>
            <option value="cs">고객지원·CS</option>
          </optgroup>

          <optgroup label="IT·개발">
            <option value="frontend">프론트엔드 개발</option>
            <option value="backend">백엔드 개발</option>
            <option value="data-science">데이터 분석·AI</option>
            <option value="app-dev">앱 개발</option>
          </optgroup>

          <optgroup label="디자인">
            <option value="ui-ux">UI/UX 디자인</option>
            <option value="graphic-design">그래픽·시각 디자인</option>
            <option value="video-edit">영상 편집·모션 그래픽</option>
          </optgroup>

          <optgroup label="경영지원·인사">
            <option value="hr">인사·채용</option>
            <option value="accounting">회계·재무</option>
            <option value="admin">총무·일반사무</option>
          </optgroup>

          <option value="others">기타 직접 입력</option>
        </select>
        {/* 3. 'others'가 선택되었을 때만 입력창 표시 */}
        {selectedJob === 'others' && (
          <div style={{ marginTop: '10px' }}>
            <input
              type="text"
              placeholder="직무를 입력하세요"
              value={customJob}
              onChange={(e) => setCustomJob(e.target.value)}
            />
          </div>
        )}
      </section>

      {/* 2. 항목 정리 섹션 (item 이상에서 표시) */}
      {(step === 'item' || step === 'card') && (
        <section>
          <h2>어떤 문항을 작성할까요?</h2>
          {/* 문항 선택 UI */}
          <select
            value={selectedQuestion}
            onChange={(e) => setSelectedQuestion(e.target.value)}>
            <option value="none">문항을 선택해주세요.</option>
            <option value="motivation">지원 동기</option>
            <option value="growth">성장 과정</option>
            <option value="personality">성격의 장단점</option>
            <option value="goals">입사 후 포부</option>
            <option value="experience">직무 관련 경험 및 역량</option>
            <option value="others">직접 입력</option>
          </select>

          {selectedQuestion === 'others' && (
            <input
              type="text"
              placeholder="문항을 직접 입력해 주세요"
              value={customQuestion}
              onChange={(e) => setCustomQuestion(e.target.value)}
            />
          )}
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
