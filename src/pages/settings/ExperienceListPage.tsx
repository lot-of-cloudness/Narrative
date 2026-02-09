import { Link } from 'react-router-dom';

// 경험 카드 임시 데이터
const MOCK_CARDS = [
  {
    id: 1,
    title: '삼성전자 인턴십 : 마케팅 전략 수립',
    date: '2023.10.20',
    keywords: ['협업', '데이터분석'],
  },
  {
    id: 2,
    title: '교내 해커톤 대상 수상',
    date: '2023.08.15',
    keywords: ['리더십', '문제해결'],
  },
];

export default function ExperienceListPage() {
  const hasCards = MOCK_CARDS.length < 0;

  return (
    <main>
      <h1>경험 카드 목록</h1>
      {hasCards ? (
        <ul className="space-y-4">
          {MOCK_CARDS.map((card) => (
            <li key={card.id} className="mb-4 p-4 border rounded-lg">
              <h2 className="font-bold text-lg">{card.title}</h2>
              <p className="text-sm text-gray-500">{card.date}</p>
              <div className="flex gap-2 mt-2">
                {card.keywords.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                    #{tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>아직 꺼내보지 않은 경험들이 있어요.</p>
          <p>인터뷰를 통행 천천히 정리해볼 수 있어요.</p>
          <Link to="/interview" className="underline cursor-pointer">
            인터뷰하러가기
          </Link>
        </div>
      )}
    </main>
  );
}
