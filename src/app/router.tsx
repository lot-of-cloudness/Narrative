// import type React from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

// Auth
import SignupPage from '../pages/auth/SignupPage';
import LoginPage from '../pages/auth/LoginPage';

// Home
import HomePage from '../pages/home/HomePage';

// Interview
import InterviewLayout from '../components/layout/InterviewLayout';
import InterviewHomePage from '../pages/interview/InterviewHomePage';
import InterviewStartPage from '../pages/interview/InterviewStartPage';
import InterviewIcebreakingPage from '../pages/interview/InterviewIcebreakingPage';
import InterviewProgressPage from '../pages/interview/InterviewProgressPage';
import InterviewAnalysisPage from '../pages/interview/InterviewAnalysisPage';
import InterviewResultPage from '../pages/interview/InterviewResultPage';

// Essay
import EssayLayout from '../components/layout/EssayLayout';
import EssayHomePage from '../pages/essay/EssayHomePage';
import EssaySetupPage from '../pages/essay/EssaySetupPage';
import EssayCreatePage from '../pages/essay/EssayCreatePage';
import EssayEditPage from '../pages/essay/EssayEditPage';
import EssayDetailPage from '../pages/essay/EssayDetailPage';

// Settings
import SettingsHome from '../pages/settings/SettingsHome';
import EssayHistoryPage from '../pages/settings/EssayHistoryPage';
import ExperienceListPage from '../pages/settings/ExperienceListPage';
import ExperienceDetailPage from '../pages/settings/ExperienceDetailPage';
import EssayHistoryDetailPage from '../pages/settings/EssayHistoryDetailPage';

// store
import { getAuthUser } from '../utils/storage';

const ProtectedRoute = () => {
  // 로그인 여부 체크
  const isLoggedIn = getAuthUser();
  console.log('로그인 여부' + !!isLoggedIn);

  // 로그인 안했으면 로그인 페이지로 이동
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />; // 로그인 했으면 요청한 페이지로 이동
};

export default function Router() {
  return (
    <Routes>
      {/* 모든 페이지는 동일한 정서적 배경(PageLayout)을 공유 */}
      <Route element={<PageLayout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Interview Flow */}
        <Route element={<InterviewLayout />}>
          <Route path="/interview" element={<InterviewHomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/interview/start" element={<InterviewStartPage />} />
            <Route
              path="/interview/icebreaking"
              element={<InterviewIcebreakingPage />}
            />
            <Route
              path="/interview/progress"
              element={<InterviewProgressPage />}
            />
            <Route
              path="/interview/analysis"
              element={<InterviewAnalysisPage />}
            />
            <Route path="/interview/result" element={<InterviewResultPage />} />
          </Route>
        </Route>

        {/* Essay Flow */}
        <Route element={<EssayLayout />}>
          <Route path="/essay" element={<EssayHomePage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/essay/job" element={<EssaySetupPage step="job" />} />
            <Route
              path="/essay/item"
              element={<EssaySetupPage step="item" />}
            />
            <Route
              path="/essay/card"
              element={<EssaySetupPage step="card" />}
            />

            <Route path="/essay/create" element={<EssayCreatePage />} />
            <Route path="/essay/:essayId" element={<EssayDetailPage />} />
            <Route path="/essay/edit/:essayId" element={<EssayEditPage />} />
          </Route>
        </Route>

        {/* Settings */}
        <Route element={<ProtectedRoute />}>
          <Route path="/settings" element={<SettingsHome />} />
          <Route
            path="/settings/experiences"
            element={<ExperienceListPage />}
          />
          <Route
            path="/settings/experiences/:id"
            element={<ExperienceDetailPage />}
          />
          <Route path="/settings/essays" element={<EssayHistoryPage />} />
          <Route
            path="/settings/essays/:id"
            element={<EssayHistoryDetailPage />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
