import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';

export default function EssayLayout() {
  return (
    <>
      <main className="flex min-h-screen">
        <Sidebar page="essay" />
        <Outlet />
      </main>
    </>
  );
}
