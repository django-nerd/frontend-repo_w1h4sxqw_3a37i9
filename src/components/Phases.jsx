import { Shield, Server, Boxes, Rocket } from 'lucide-react';

const phases = [
  {
    icon: Server,
    title: 'Backend Foundation',
    description:
      'FastAPI + MongoDB baseline with schemas, routers, and connection pooling. Durable persistence from day one.',
  },
  {
    icon: Shield,
    title: 'Auth & Core APIs',
    description:
      'JWT sessions, sign-up/login, protected CRUD for shipments, and device data endpoints ready for integration.',
  },
  {
    icon: Boxes,
    title: 'Frontend UX',
    description:
      'Clean, responsive pages for onboarding, dashboard, shipment creation, and live device data stream.',
  },
  {
    icon: Rocket,
    title: 'Streaming Pipeline',
    description:
      'Kafka producer/consumer to stream simulated telemetry into MongoDB for real-time insights.',
  },
];

export default function Phases() {
  return (
    <section id="phases" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900">Project Phases</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          A pragmatic roadmap to ship value quickly and expand safely.
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
