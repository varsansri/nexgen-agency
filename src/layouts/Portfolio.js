import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
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

function Portfolio({ data }) {
  const { frontmatter } = data;
  const { title, projects } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-4 font-bold">{title}</h1>
        <p className="text-center text-text text-lg max-w-xl mx-auto mb-12">A showcase of our recent digital products, brand identities, and custom engineering projects.</p>
        
        <div className="row">
          {projects.map((project, i) => {
            const iconKey = categoryIconMap[project.category] || "code";
            return (
              <div key={i} className="col-12 md:col-6 mb-8">
                <LiquidGlassCard className="h-full flex flex-col justify-between p-0">
                  <div className="relative h-56 bg-gradient-to-br from-primary/20 via-purple-600/10 to-transparent flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <CustomIconBadge icon={iconKey} size="lg" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm font-bold flex items-center gap-1.5">
                        View Case Study →
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/15 text-primary border border-primary/20 mb-3">
                        <CustomIconBadge icon={iconKey} size="sm" />
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-white text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-text/90 text-sm mt-2 leading-relaxed">{project.description}</p>
                    </div>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/10">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-2.5 py-1 text-xs rounded-md bg-body/80 text-text/90 font-medium border border-white/10">
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
      </div>
    </section>
  );
}

export default Portfolio;
