import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

export default function Nav({ isLoggedIn }: { isLoggedIn: boolean }) {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="ml-auto">
      <ul
        className="flex items-center gap-4 text-sm text-gray-500"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <li className="hover:text-gray-700">
          <Link to="/interview">인터뷰</Link>
        </li>
        <li className="hover:text-gray-700">
          <Link to="/essay">자소서</Link>
        </li>

        {isLoggedIn ? (
          <>
            {/* 로그인 된 상태에서 노출 */}
            <li className="hover:text-gray-700">
              <Link to="/settings">설정</Link>
            </li>
            <li>
              <button onClick={handleLogout} className="cursor-pointer">
                로그아웃
              </button>
            </li>
          </>
        ) : (
          <>
            {/* 로그인 안 된 상태에서 노출 */}
            <li className="hover:text-gray-700">
              <Link to="/signup">회원가입</Link>
            </li>
            <li className="hover:text-gray-700">
              <Link to="/login">로그인</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
