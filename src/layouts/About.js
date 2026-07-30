import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

function About({ data }) {
  const { frontmatter } = data;
  const { title, mission, story, values, stats, testimonials } = frontmatter;

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-center mb-12">{title}</h1>
          <div className="row items-center">
            <div className="col-12 lg:col-6">
              <h2 className="h3 text-primary">{mission}</h2>
              <p className="mt-6 text-lg leading-relaxed">{story}</p>
            </div>
            <div className="col-12 lg:col-6">
              <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
                {stats.map((stat, i) => (
                  <div key={i} className="card text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-text text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center mb-8">Our Values</h2>
          <div className="row">
            {values.map((value, i) => (
              <div key={i} className="col-12 md:col-6 lg:col-3 mb-6">
                <div className="card text-center h-full">
                  <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Image src={value.icon} alt={value.name} width={32} height={32} />
                  </div>
                  <h4 className="h5 mt-4 text-text-dark">{value.name}</h4>
                  <p className="text-text text-sm mt-2">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center mb-8">What Our Clients Say</h2>
          <div className="row">
            {testimonials.map((t, i) => (
              <div key={i} className="col-12 md:col-4 mb-6">
                <div className="card h-full">
                  <div className="flex gap-1 text-primary mb-4">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="font-semibold text-text-dark">{t.author}</div>
                    <div className="text-text text-sm">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
