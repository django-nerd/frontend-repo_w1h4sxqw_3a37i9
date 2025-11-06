import { Lock, Database, Activity, LayoutGrid } from 'lucide-react';

const items = [
  {
    icon: Lock,
    title: 'Secure by default',
    description: 'BCrypt hashing and JWT-powered sessions to keep data safe and routes protected.',
  },
  {
    icon: Database,
    title: 'Backed by MongoDB',
    description: 'Collections for users, shipments, and device data with flexible schemas.',
  },
  {
    icon: Activity,
    title: 'Live telemetry',
    description: 'Kafka pipeline to stream device metrics and query the latest records on demand.',
  },
  {
    icon: LayoutGrid,
    title: 'Modern UI',
    description: 'Responsive, accessible components built with Tailwind to move fast with style.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Why this stack</h2>
            <p className="mt-2 text-slate-600 max-w-xl">
              Opinionated choices for a small, mighty app: production-ready security, scalable data,
              and an intuitive interface.
            </p>
            <ul className="mt-6 space-y-4">
              {items.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-4">
                  <div className="mt-1 h-10 w-10 flex-none rounded-lg bg-slate-900 text-white grid place-items-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{title}</p>
                    <p className="text-slate-600 text-sm">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-6 bg-gradient-to-br from-white to-slate-50 shadow-sm">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-slate-500">Auth</p>
                <p className="mt-1 font-semibold">JWT + BCrypt</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-slate-500">Database</p>
                <p className="mt-1 font-semibold">MongoDB (Atlas)</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-slate-500">APIs</p>
                <p className="mt-1 font-semibold">FastAPI Routers</p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200">
                <p className="text-slate-500">Streaming</p>
                <p className="mt-1 font-semibold">Kafka pipeline</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
