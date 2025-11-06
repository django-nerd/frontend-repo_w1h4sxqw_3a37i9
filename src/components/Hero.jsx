import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="overview" className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8iB6kW9VjXlQ5wqf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            SCMXPertLite
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            A streamlined Supply Chain Monitoring experience. Backend-first with FastAPI and MongoDB,
            secure auth, and real-time device insights.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#get-started" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-white font-medium shadow hover:bg-slate-800">
              Get Started
            </a>
            <a href="#phases" className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-slate-900 border border-slate-300 hover:bg-slate-50">
              Explore Roadmap
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
