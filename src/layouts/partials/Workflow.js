import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const steps = [
  { num: "01", title: "Discover", desc: "Understanding your business goals, target audience, and market landscape.", icon: "🔍" },
  { num: "02", title: "Strategize", desc: "Crafting a tailored roadmap and architecture for optimal growth.", icon: "🎯" },
  { num: "03", title: "Design", desc: "Creating intuitive, high-converting UI/UX and visual identities.", icon: "🎨" },
  { num: "04", title: "Develop", desc: "Building scalable, clean, high-performance code with modern frameworks.", icon: "⚡" },
  { num: "05", title: "Launch", desc: "Rigorous testing, optimization, and seamless zero-downtime deployment.", icon: "🚀" },
  { num: "06", title: "Grow", desc: "Continuous monitoring, data-driven optimization, and scaling.", icon: "📈" },
];

const Workflow = ({ workflow }) => {
  return (
    <section className="section bg-light/50">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">Our Methodology</span>
          {markdownify(
            workflow.title,
            "h2",
            "mx-auto max-w-2xl font-bold mt-2"
          )}
          {markdownify(workflow.description, "p", "mt-4 text-text text-lg max-w-xl mx-auto")}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="bg-body border border-border rounded-xl p-6 relative hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform">
                  {step.icon}
                </span>
                <span className="text-2xl font-bold text-primary/30 group-hover:text-primary transition-colors font-mono">
                  {step.num}
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-dark mb-2">{step.title}</h3>
              <p className="text-text text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {workflow.image && (
          <div className="overflow-hidden rounded-2xl border border-border bg-body p-4 shadow-sm">
            <Image
              src={workflow.image}
              alt="workflow graphic"
              width={1920}
              height={296}
              className="w-full h-auto rounded-xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Workflow;
