import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Phases from './components/Phases';
import Features from './components/Features';
import CallToAction from './components/CallToAction';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Phases />
        <Features />
        <CallToAction />
      </main>
      <footer className="border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SCMXPertLite. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#overview" className="hover:text-slate-900">Overview</a>
            <a href="#phases" className="hover:text-slate-900">Phases</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
