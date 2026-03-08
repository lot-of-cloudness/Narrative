import { create } from 'zustand';
import { getAuthUser, removeAuthUser, saveAuthUser } from '../utils/storage';

interface AuthUser {
  email: string;
}

interface AuthState {
  user: AuthUser | null; // 현재 로그인 한 사용자의 정보, 없으면 null
  login: (email: string) => void; //email을 받아서 로그인 처리
  logout: () => void;
  initailize: () => void; // 앱 시작 시 localStorage에서 사용자 정보 불러오기, 새로고침해도 로그인 유지
}

/*
  zustand store 기본 작성방법
  const useStore = create((set) => ({
    state: 초기값,
    action: () => set({ state: 변경값 }),
  }));
 */

export const useAuthStore = create<AuthState>((set) => ({
  user: null, //user의 초기값은 null

  /**
   * 로그인 함수
   */
  login: (email: string) => {
    const user = { email };

    saveAuthUser(user); // localStorage에 사용자 정보 저장
    set({ user: user }); // zustand state에 사용자 정보 저장해서 전역 상태로 관리
  },

  /**
   * 로그아웃 함수
   */
  logout: () => {
    removeAuthUser(); // localStorage에서 사용자 정보 삭제
    set({ user: null }); // 전역 상태에서 유저 정보 초기화
  },

  /*
   * 앱 시작 시 localStorage에서 사용자 정보 불러오기
   * 새로고침해도 로그인 유지
   */
  initailize: () => {
    const storedUser = getAuthUser();
    if (storedUser) {
      set({ user: storedUser });
    }
  },
}));
