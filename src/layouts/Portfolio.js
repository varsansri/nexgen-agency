import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function Portfolio({ data }) {
  const { frontmatter } = data;
  const { title, projects } = frontmatter;

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row">
          {projects.map((project, index) => (
            <div key={index} className="col-12 md:col-6 mt-6">
              <div className="card p-0 overflow-hidden">
                <div className="relative h-56 bg-light">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="text-sm text-primary uppercase font-semibold tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="h4 mt-2">{project.title}</h3>
                  <p className="mt-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full border border-border"
                      >
                        {tag}
                      </span>
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
