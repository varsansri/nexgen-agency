import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function Portfolio({ data }) {
  const { frontmatter } = data;
  const { title, projects } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-12">{title}</h1>
        <div className="row">
          {projects.map((project, i) => (
            <div key={i} className="col-12 md:col-6 mb-6">
              <div className="card p-0 overflow-hidden h-full">
                <div className="relative h-48 bg-primary/5 flex items-center justify-center">
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-semibold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-text-dark text-lg font-semibold mt-2">{project.title}</h3>
                  <p className="text-text text-sm mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 text-xs rounded-full border border-border text-text">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
