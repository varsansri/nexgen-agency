import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const stagger = (i) => ({
  animation: `fadeInUp 300ms var(--ease-out) forwards`,
  animationDelay: `${i * 50}ms`,
  opacity: 0,
});

const cardTransition = "transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out), border-color 200ms var(--ease-out)";

function About({ data }) {
  const { frontmatter } = data;
  const { title, mission, story, values, stats, testimonials } = frontmatter;

  return (
    <>
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="row section items-center">
            <div className="col-12 lg:col-6">
              <h2 className="h3">{mission}</h2>
              <p className="mt-6 text-lg leading-relaxed">{story}</p>
            </div>
            <div className="col-12 lg:col-6">
              <div className="grid grid-cols-2 gap-6 mt-8 lg:mt-0">
                {stats.map((stat, index) => (
                  <div key={index} className="card text-center p-6" style={{ ...stagger(index), transition: cardTransition }}>
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="text-center">Our Values</h2>
          <div className="row section">
            {values.map((value, index) => (
              <div key={index} className="col-12 md:col-6 lg:col-3 mt-6" style={stagger(index)}>
                <div className="card text-center" style={{ transition: cardTransition }}>
                  <div className="mx-auto w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Image src={value.icon} alt={value.name} width={32} height={32} />
                  </div>
                  <h4 className="h5 mt-4">{value.name}</h4>
                  <p className="text-sm mt-2">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="text-center">What Our Clients Say</h2>
          <div className="row section">
            {testimonials.map((t, index) => (
              <div key={index} className="col-12 md:col-4 mt-6" style={stagger(index + values.length)}>
                <div className="card" style={{ transition: cardTransition }}>
                  <div className="flex gap-1 text-primary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-sm">{t.role}</div>
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
