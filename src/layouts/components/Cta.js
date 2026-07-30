import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

function Cta({ cta }) {
  return (
    <section className="section px-4">
      <div className="container relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-primary/15 via-body to-primary/5 p-8 md:p-14 shadow-2xl shadow-primary/10">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 blur-3xl rounded-full pointer-events-none" />
        <div className="row mx-auto items-center justify-between relative z-10">
          <div className="md:col-5 lg:col-4 text-center">
            <Image
              className="w-full max-w-[280px] mx-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              src={cta?.image}
              alt="call to action image"
              width={325}
              height={206}
            />
          </div>
          <div className="mt-8 text-center md:col-7 lg:col-7 md:mt-0 md:text-left md:pl-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">{cta?.title}</h2>
            <p className="mt-4 text-text/90 text-lg leading-relaxed">{markdownify(cta?.content)}</p>
            {cta.button.enable && (
              <Link
                className="btn btn-primary mt-6 text-base px-8 py-4 group"
                href={cta.button.link}
              >
                <span>{cta.button.label}</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
