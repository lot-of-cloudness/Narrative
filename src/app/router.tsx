import { Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';

// Auth
import SignupPage from '../pages/auth/SignupPage';
import LoginPage from '../pages/auth/LoginPage';

// Home
import HomePage from '../pages/home/HomePage';

// Interview
import InterviewHomePage from '../pages/interview/InterviewHomePage';
import InterviewStartPage from '../pages/interview/InterviewStartPage';
import InterviewIcebreakingPage from '../pages/interview/InterviewIcebreakingPage';
import InterviewProgressPage from '../pages/interview/InterviewProgressPage';
import InterviewAnalysisPage from '../pages/interview/InterviewAnalysisPage';
import InterviewResultPage from '../pages/interview/InterviewResultPage';

// Essay
import EssayHomePage from '../pages/essay/EssayHomePage';
import EssaySetupPage from '../pages/essay/EssaySetupPage';
// import EssayJobSelectPage from '../pages/essay/EssayJobSelectPage';
// import EssayQuestionSelectPage from '../pages/essay/EssayQuestionSelectPage';
// import EssayCardSelectPage from '../pages/essay/EssayCardSelectPage';
import EssayCreatePage from '../pages/essay/EssayCreatePage';
import EssayEditPage from '../pages/essay/EssayEditPage';
import EssayDetailPage from '../pages/essay/EssayDetailPage';

// Settings
import SettingsHome from '../pages/settings/SettingsHome';
import EssayHistoryPage from '../pages/settings/EssayHistoryPage';
import ExperienceListPage from '../pages/settings/ExperienceListPage';
import ExperienceDetailPage from '../pages/settings/ExperienceDetailPage';
import EssayHistoryDetailPage from '../pages/settings/EssayHistoryDetailPage';

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
        <Route path="/interview" element={<InterviewHomePage />} />
        <Route path="/interview/start" element={<InterviewStartPage />} />
        <Route
          path="/interview/icebreaking"
          element={<InterviewIcebreakingPage />}
        />
        <Route path="/interview/progress" element={<InterviewProgressPage />} />
        <Route path="/interview/analysis" element={<InterviewAnalysisPage />} />
        <Route path="/interview/result" element={<InterviewResultPage />} />

        {/* Essay Flow */}
        <Route path="/essay" element={<EssayHomePage />} />
        <Route path="/essay/job" element={<EssaySetupPage step="job" />} />
        <Route path="/essay/item" element={<EssaySetupPage step="item" />} />
        <Route path="/essay/card" element={<EssaySetupPage step="card" />} />

        {/* <Route path="/essay/job" element={<EssayJobSelectPage />} />
        <Route path="/essay/item" element={<EssayQuestionSelectPage />} />
        <Route path="/essay/card" element={<EssayCardSelectPage />} /> */}
        <Route path="/essay/create" element={<EssayCreatePage />} />
        <Route path="/essay/edit/:essayId" element={<EssayEditPage />} />
        <Route path="/essay/:essayId" element={<EssayDetailPage />} />

        {/* Settings (Records) */}
        <Route path="/settings" element={<SettingsHome />} />
        <Route path="/settings/experiences" element={<ExperienceListPage />} />
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
    </Routes>
  );
}
