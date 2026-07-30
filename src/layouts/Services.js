import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Cta from "./components/Cta";

function Services({ data }) {
  const { frontmatter } = data;
  const { title, services, call_to_action } = frontmatter;

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-center mb-12">{title}</h1>
          {services.map((service, i) => (
            <div key={i} className={`row items-center ${i > 0 ? "mt-16 pt-16 border-t border-border" : ""}`}>
              <div className="col-12 lg:col-2 flex justify-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Image src={service.icon} alt={service.title} width={40} height={40} />
                </div>
              </div>
              <div className="col-12 lg:col-10 mt-6 lg:mt-0">
                <h2 className="h3 text-text-dark">{service.title}</h2>
                <p className="mt-4 text-lg">{service.description}</p>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-2 text-text text-sm">
                      <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      {call_to_action && <Cta cta={call_to_action} />}
    </>
  );
}

export default Services;
