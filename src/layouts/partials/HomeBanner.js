import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => (
  <section className="section pt-10 pb-16 relative overflow-hidden">
    {/* Background Decorative Ambient Glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-3xl rounded-full pointer-events-none -z-10" />

    <div className="container">
      <div className="row items-center">
        <div className="col-12 lg:col-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 200+ businesses worldwide
          </div>
          <h1 className="font-primary font-extrabold text-text-dark text-h1-sm md:text-h1 leading-[1.15] tracking-tight">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg text-text leading-relaxed max-w-xl mx-auto lg:mx-0">
            {markdownify(banner.content)}
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start items-center">
            {banner.button.enable && (
              <Link className="btn btn-primary shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all" href={banner.button.link}>
                {banner.button.label} →
              </Link>
            )}
            <Link className="btn btn-outline-primary" href="/portfolio">
              View Our Work
            </Link>
          </div>
          <div className="mt-10 pt-6 border-t border-border/60 flex items-center justify-center lg:justify-start gap-6 text-xs text-text font-medium">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              99.9% Uptime SLA
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              Agile Execution
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              24/7 Support
            </span>
          </div>
        </div>
        <div className="col-12 lg:col-6 mt-10 lg:mt-0">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <Image className="mx-auto drop-shadow-xl hover:scale-102 transition-transform duration-500" src={banner.image} width={600} height={390} alt="NexGen Digital Banner" priority />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeBanner;
