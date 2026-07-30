import Link from "next/link";
import LiquidGlassCard from "@layouts/components/LiquidGlassCard";
import CustomIconBadge from "@layouts/components/CustomIconBadge";

const categoryIconMap = {
  "E-Commerce": "shopping",
  "Healthcare": "activity",
  "EdTech": "book",
  "Branding": "feather",
  "SaaS": "piechart",
  "Mobile": "smartphone",
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
          const iconKey = categoryIconMap[project.category] || "code";
          return (
            <div key={i} className="col-12 md:col-4 mb-6">
              <LiquidGlassCard className="h-full flex flex-col justify-between p-0">
                <div className="h-48 flex items-center justify-center bg-gradient-to-br from-primary/20 via-purple-600/10 to-transparent relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <CustomIconBadge icon={iconKey} size="lg" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-text/90 text-sm mt-2 leading-relaxed">{project.description}</p>
                  </div>
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-white/10">
                      {project.tags.map((tag, j) => (
                        <span key={j} className="px-2.5 py-1 text-[11px] rounded-md bg-body/80 text-text/90 font-medium border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </LiquidGlassCard>
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
