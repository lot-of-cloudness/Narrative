import { Link } from 'react-router-dom';
import Nav from './Nav';
import { useAuthStore } from '../store/auth.store';

export default function Header() {
  // ✅ Zustand 스토어의 상태를 구독합니다.
  // 이제 login()이 실행되어 이 값이 true가 되면 Header가 다시 그려집니다.
  const isLoggedIn = useAuthStore((state) => !!state.user);

  return (
    <header className="flex items-center p-4 border-b border-gray-300">
      <h1>
        <Link
          to="/"
          className="px-4 py-4 text-text-primary text-2xl font-medium cursor-pointer"
          style={{ fontFamily: 'Georgia, serif' }}>
          Narrative
        </Link>
      </h1>
      <Nav isLoggedIn={isLoggedIn} />
    </header>
  );
}
