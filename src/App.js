import React from 'react';

function App() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 min-h-screen flex flex-col items-center justify-center text-white">
      <header className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">🚀 ReelBoostAI</h1>
        <p className="text-lg">AI Powered Reel Booster for Creators & Businesses</p>
      </header>

      <main className="flex flex-col gap-4">
        <a href="#getstarted" className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition transform">Get Started</a>
        <a href="#login" className="bg-white text-black font-bold px-6 py-3 rounded-full hover:scale-105 transition transform">Login</a>
      </main>

      <section id="getstarted" className="mt-16 bg-white text-black p-8 rounded-xl max-w-lg text-center shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Grow your Reels Fast 🚀</h2>
        <p>Use our AI to boost your Instagram Reels, YouTube Shorts and more.  
        Get insights, captions, hashtags, and schedule your reels like a pro!</p>
      </section>

      <section id="login" className="mt-16 bg-black bg-opacity-70 p-8 rounded-xl max-w-sm text-center shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="p-3 rounded-md"/>
          <input type="password" placeholder="Password" className="p-3 rounded-md"/>
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:scale-105 transition transform">Login</button>
        </form>
      </section>
    </div>
  );
}

export default App;
