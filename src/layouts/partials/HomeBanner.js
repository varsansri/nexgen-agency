import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => (
  <section className="section pb-0 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
    <div className="container relative">
      <div className="row items-center">
        <div className="col-12 lg:col-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 mx-auto lg:mx-0">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by 200+ businesses worldwide
          </div>
          <h1 className="font-primary font-bold text-h1-sm md:text-h1 leading-tight bg-gradient-to-r from-white via-white to-primary/80 bg-clip-text text-transparent">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed">{markdownify(banner.content)}</p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            {banner.button.enable && (
              <Link className="btn btn-primary text-base px-8 py-4" href={banner.button.link}>
                {banner.button.label}
              </Link>
            )}
            <Link className="btn btn-outline-primary text-base px-8 py-4" href="/portfolio">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="col-12 lg:col-6 mt-10 lg:mt-0">
          <Image className="mx-auto" src={banner.image} width={650} height={420} alt="banner" priority />
        </div>
      </div>
    </div>
  </section>
);

export default HomeBanner;
