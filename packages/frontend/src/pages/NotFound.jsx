import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Page not found</p>
        <Link to="/" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
