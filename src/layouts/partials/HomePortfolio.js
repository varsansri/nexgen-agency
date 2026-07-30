import Link from "next/link";
import { FiShoppingBag, FiActivity, FiBookOpen, FiFeather, FiPieChart, FiSmartphone, FiFolder } from "react-icons/fi";

const categoryIconMap = {
  "E-Commerce": FiShoppingBag,
  "Healthcare": FiActivity,
  "EdTech": FiBookOpen,
  "Branding": FiFeather,
  "SaaS": FiPieChart,
  "Mobile": FiSmartphone,
};

const HomePortfolio = ({ portfolio }) => (
  <section className="section">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h2 className="text-text-dark mt-3 font-bold">Featured Projects</h2>
        <p className="text-text text-base mt-2 max-w-lg mx-auto">Explore how we help industry-leading companies scale with high-impact digital solutions.</p>
      </div>
      <div className="row">
        {portfolio.slice(0, 3).map((project, i) => {
          const IconComponent = categoryIconMap[project.category] || FiFolder;
          return (
            <div key={i} className="col-12 md:col-4 mb-6">
              <div className="card p-0 overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-body border border-primary/20 text-primary flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-text-dark text-lg font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-text text-sm mt-2 leading-relaxed">{project.description}</p>
                </div>
                {project.tags && project.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2 py-0.5 text-[11px] rounded-md bg-light text-text-dark font-medium border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <div className="text-center mt-8">
        <Link href="/portfolio" className="btn btn-outline-primary">View All Projects →</Link>
      </div>
    </div>
  </section>
);

export default HomePortfolio;
