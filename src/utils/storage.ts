// 로그인한 사용자 정보를 localStorage에 저장하기 위한 key
const AUTH_KEY = 'mock_auth_user';

// 로그인 성공 시 호출
export const saveAuthUser = (user: { email: string }) => {
  // localStorage에는 문자열만 저장 가능하므로 JSON.stringify 사용
  // Mock이라서 email만 저장
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
};

// 현재 로그인한 사용자 정보 가져오기
export const getAuthUser = () => {
  const userData = localStorage.getItem(AUTH_KEY);
  if (!userData) return null;
  return JSON.parse(userData); // 저장된 정보를 다시 객체로 변화해서 반환
};

// 로그아웃 시 호출
export const removeAuthUser = () => {
  // localStorage에서 사용자 정보 삭제
  localStorage.removeItem(AUTH_KEY);
};
