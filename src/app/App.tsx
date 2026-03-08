import { useEffect } from 'react';
import { useAuthStore } from '../store/auth.store';
import Router from './router';

function App() {
  const initialize = useAuthStore((state) => state.initailize);

  /**
   * 앱 시작 시 로그인 상태 복구
   */
  useEffect(() => {
    initialize();
  }, [initialize]);

  return <Router />;
}

export default App;
