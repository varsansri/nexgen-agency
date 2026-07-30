import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { FiShoppingBag, FiActivity, FiBookOpen, FiFeather, FiPieChart, FiSmartphone, FiFolder } from "react-icons/fi";

const categoryIconMap = {
  "E-Commerce": FiShoppingBag,
  "Healthcare": FiActivity,
  "EdTech": FiBookOpen,
  "Branding": FiFeather,
  "SaaS": FiPieChart,
  "Mobile": FiSmartphone,
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
            const IconComponent = categoryIconMap[project.category] || FiFolder;
            return (
              <div key={i} className="col-12 md:col-6 mb-8">
                <div className="card p-0 overflow-hidden h-full flex flex-col hover:border-primary/40 hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-56 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center overflow-hidden">
                    {project.image ? (
                      <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-body border border-primary/20 text-primary flex items-center justify-center shadow-md">
                        <IconComponent className="w-8 h-8" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="text-white text-sm font-semibold flex items-center gap-1.5">
                        View Details →
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-primary/10 text-primary mb-3">
                        <IconComponent className="w-3.5 h-3.5" />
                        <span>{project.category}</span>
                      </div>
                      <h3 className="text-text-dark text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-text text-sm mt-2 leading-relaxed">{project.description}</p>
                    </div>
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-border">
                        {project.tags.map((tag, j) => (
                          <span key={j} className="px-2.5 py-1 text-xs rounded-md bg-light text-text-dark font-medium border border-border">
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
      </div>
    </section>
  );
}

export default Portfolio;
