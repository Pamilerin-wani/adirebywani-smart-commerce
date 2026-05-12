export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">AdirebyWani Smart Commerce</h1>
        <p className="text-xl text-gray-300 mb-8">Full-stack fashion ecosystem with localized pricing and community</p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">🛍️ Shop</h3>
            <p className="text-gray-300">Browse unique African fashion pieces</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">👥 Community</h3>
            <p className="text-gray-300">Connect with fashion enthusiasts</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur">
            <h3 className="text-2xl font-bold mb-2">⚙️ Admin</h3>
            <p className="text-gray-300">Automate store management</p>
          </div>
        </div>
      </div>
    </div>
  );
}
