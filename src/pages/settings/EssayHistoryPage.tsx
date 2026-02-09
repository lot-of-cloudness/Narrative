import { Link } from 'react-router-dom';

// 자기소개서 임시 데이터
const MOCK_ESSAYS = [
  {
    id: 1,
    title: '삼성전자 인턴십 : 마케팅 전략 수립',
    date: '2023.10.20',
    job: '데이터분석',
    item: '지원동기',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: '교내 해커톤 대상 수상',
    date: '2023.08.15',
    job: '문제해결',
    item: '성장과정',
    desc: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function EssayHistoryPage() {
  const hasEssays = MOCK_ESSAYS.length < 0;

  return (
    <main>
      <h1>자소서 히스토리</h1>
      {hasEssays ? (
        <ul className="space-y-4">
          {MOCK_ESSAYS.map((essay) => (
            <li key={essay.id} className="mb-4 p-4 border rounded-lg">
              <h2 className="font-bold text-lg">{essay.title}</h2>
              <p className="text-sm text-gray-500">{essay.date}</p>
              <p className="text-sm text-gray-400">{essay.item}</p>
              <p className="flex gap-2 mt-2">직무 : {essay.job}</p>
              <p className="mt-2 text-sm">{essay.desc}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>아직 작성된 자기소개서가 없어요.</p>
          <Link to="/essay" className="underline cursor-pointer">
            자기소개서 작성하러가기
          </Link>
        </div>
      )}
    </main>
  );
}
