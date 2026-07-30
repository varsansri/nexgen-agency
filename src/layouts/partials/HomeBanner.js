import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = ({ banner }) => (
  <section className="section">
    <div className="container">
      <div className="row items-center">
        <div className="col-12 lg:col-6 text-center lg:text-left">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            Trusted by 200+ businesses worldwide
          </span>
          <h1 className="font-primary font-bold text-text-dark text-h1-sm md:text-h1 leading-tight">
            {banner.title}
          </h1>
          <p className="mt-6 text-lg text-text leading-relaxed max-w-xl">
            {markdownify(banner.content)}
          </p>
          <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            {banner.button.enable && (
              <Link className="btn btn-primary" href={banner.button.link}>
                {banner.button.label}
              </Link>
            )}
            <Link className="btn btn-outline-primary" href="/portfolio">
              View Our Work
            </Link>
          </div>
        </div>
        <div className="col-12 lg:col-6 mt-10 lg:mt-0">
          <Image className="mx-auto" src={banner.image} width={600} height={390} alt="banner" priority />
        </div>
      </div>
    </div>
  </section>
);

export default HomeBanner;
