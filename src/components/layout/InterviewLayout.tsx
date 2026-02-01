import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

export default function InterviewLayout() {
  return (
    <>
      <main className="flex min-h-screen">
        <Sidebar page="interview" />
        <Outlet />
      </main>
    </>
  );
}
