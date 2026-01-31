export default function Nav() {
  return (
    <nav className="ml-auto">
      <ul
        className="flex items-center gap-4 text-sm text-gray-500"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* 로그인 안 된 상태에서 노출 */}
        <li className="hover:text-gray-700">
          <a href="/signup">회원가입</a>
        </li>
        <li className="hover:text-gray-700">
          <a href="/login">로그인</a>
        </li>
        {/* 로그인 된 상태에서 노출 */}

        <li className="hover:text-gray-700">
          <a href="/interview">인터뷰</a>
        </li>
        <li className="hover:text-gray-700">
          <a href="/essay">자소서</a>
        </li>

        <li className="hover:text-gray-700">
          <a href="/settings">설정</a>
        </li>
      </ul>
    </nav>
  );
}

// import { Link, useLocation } from 'react-router-dom';

// export default function Nav() {
//   const location = useLocation();

//   // 메뉴 데이터를 배열로 관리하여 유지보수성 향상
//   const menuItems = [
//     { name: '인터뷰', path: '/interview' },
//     { name: '자소서', path: '/essay' },
//     { name: '설정', path: '/settings' },
//   ];

//   const authItems = [
//     { name: '회원가입', path: '/signup' },
//     { name: '로그인', path: '/login' },
//   ];

//   // 활성화된 링크인지 확인하는 함수
//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="ml-auto">
//       <ul className="flex items-center gap-6 text-sm font-sans font-medium">
//         {/* 비로그인 상태 메뉴 예시 */}
//         {authItems.map((item) => (
//           <li key={item.path}>
//             <Link
//               to={item.path}
//               className={`transition-colors cursor-pointer hover:text-text-primary ${
//                 isActive(item.path) ? 'text-text-primary font-bold' : 'text-text-tertiary'
//               }`}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}

//         {/* 구분선 (디자인적 요소) */}
//         <div className="w-[1px] h-3 bg-divider mx-1" />

//         {/* 로그인 상태 메뉴 예시 */}
//         {menuItems.map((item) => (
//           <li key={item.path}>
//             <Link
//               to={item.path}
//               className={`transition-colors cursor-pointer hover:text-brand-sage ${
//                 isActive(item.path) ? 'text-brand-sage font-bold' : 'text-text-secondary'
//               }`}
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }
