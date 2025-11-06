export default function CallToAction() {
  return (
    <section id="get-started" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 text-white p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to build Phase 1?</h3>
            <p className="mt-2 text-slate-300 max-w-2xl">
              Kick off with a solid backend foundation: schemas, auth, and APIs. We can wire the Kafka
              pipeline next.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-slate-900 font-medium shadow hover:bg-slate-100"
          >
            Start Implementation
          </a>
        </div>
      </div>
    </section>
  );
}
