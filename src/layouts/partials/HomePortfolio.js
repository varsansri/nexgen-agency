import Link from "next/link";

const HomePortfolio = ({ portfolio }) => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="mt-3">Recent Projects</h2>
        <p className="mt-4 text-text max-w-2xl mx-auto">A selection of work we are proud of. Each project is a partnership focused on measurable results.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.slice(0, 6).map((project, i) => (
          <div key={i} className="group relative rounded-xl overflow-hidden border border-border bg-body hover:border-primary/40 transition-all duration-300 hover:-translate-y-1">
            <div className="h-48 flex items-center justify-center bg-primary/5 text-5xl text-primary/20">
              {project.icon || "📁"}
            </div>
            <div className="p-6">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
              <h3 className="text-lg font-semibold mt-2">{project.title}</h3>
              <p className="text-text text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags && project.tags.map((tag, j) => (
                  <span key={j} className="px-2.5 py-1 text-xs rounded-full border border-border text-text">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/portfolio" className="btn btn-outline-primary">View All Projects</Link>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
