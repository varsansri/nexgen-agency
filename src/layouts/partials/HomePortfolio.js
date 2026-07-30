import Link from "next/link";

const HomePortfolio = ({ portfolio }) => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="text-text-dark mt-3">Recent Projects</h2>
      </div>
      <div className="row">
        {portfolio.slice(0, 3).map((project, i) => (
          <div key={i} className="col-12 md:col-4 mb-6">
            <div className="card p-0 overflow-hidden">
              <div className="h-48 flex items-center justify-center bg-primary/5 text-5xl">
                {project.icon || "📁"}
              </div>
              <div className="p-6">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-text-dark text-lg font-semibold mt-2">{project.title}</h3>
                <p className="text-text text-sm mt-1">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/portfolio" className="btn btn-outline-primary">View All Projects</Link>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
