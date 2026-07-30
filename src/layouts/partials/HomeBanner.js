import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => (
  <section className="section pt-12 pb-20 relative overflow-hidden">
    {/* Background Decorative Ambient Glows */}
    <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

    <div className="container">
      <div className="row items-center">
        <div className="col-12 lg:col-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-semibold mb-6 shadow-sm shadow-primary/10 hover:border-primary/40 transition-colors">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping shrink-0" />
            <span className="w-2.5 h-2.5 rounded-full bg-primary absolute shrink-0" />
            <span>Trusted by 200+ global brands & startups</span>
          </div>
          
          <h1 className="font-primary font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.12] tracking-tight">
            We craft digital experiences that <span className="bg-gradient-to-r from-primary via-purple-400 to-indigo-300 bg-clip-text text-transparent">drive growth</span>
          </h1>

          <p className="mt-6 text-lg text-text/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
            {markdownify(banner.content)}
          </p>

          <div className="flex flex-wrap gap-4 mt-9 justify-center lg:justify-start items-center">
            {banner.button.enable && (
              <Link className="btn btn-primary group" href={banner.button.link}>
                <span>{banner.button.label}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            )}
            <Link className="btn btn-outline-primary" href="/portfolio">
              Explore Our Work
            </Link>
          </div>

          <div className="mt-12 pt-6 border-t border-border/60 flex items-center justify-center lg:justify-start gap-8 text-xs text-text/80 font-medium">
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">✓</span>
              99.9% Performance SLA
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">✓</span>
              Agile Workflows
            </span>
            <span className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">✓</span>
              24/7 Dedicated Support
            </span>
          </div>
        </div>

        <div className="col-12 lg:col-6 mt-12 lg:mt-0">
          <div className="relative mx-auto max-w-lg lg:max-w-none animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl -z-10 transform rotate-3 scale-95" />
            <Image className="mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" src={banner.image} width={600} height={390} alt="NexGen Digital Banner" priority />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeBanner;
