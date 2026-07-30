import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import LiquidGlassCard from "@layouts/components/LiquidGlassCard";

const HomeFeatures = ({ feature }) => (
  <section className="section bg-light">
    <div className="container">
      <div className="text-center mb-12">
        <span className="text-primary text-sm font-semibold uppercase tracking-widest">Why NexGen Digital</span>
        <h2 className="text-text-dark font-bold mt-2">{markdownify(feature.title)}</h2>
        <p className="text-text text-base mt-2 max-w-lg mx-auto">Enterprise-grade quality with agile execution to accelerate your digital growth.</p>
      </div>
      <div className="row">
        {feature.features.map((item, i) => (
          <div className="col-12 sm:col-6 lg:col-4 mb-6" key={`feature-${i}`}>
            <LiquidGlassCard className="p-6 text-center h-full flex flex-col items-center">
              {item.icon && (
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Image src={item.icon} width={32} height={32} alt={item.name} />
                </div>
              )}
              {markdownify(item.name, "h3", "h5 mb-3 text-text-dark font-bold")}
              <p className="text-text text-sm leading-relaxed">{item.content}</p>
            </LiquidGlassCard>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFeatures;
