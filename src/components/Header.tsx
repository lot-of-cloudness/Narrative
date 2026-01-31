import { Link } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
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
      <Nav />
    </header>
  );
}
