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
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section">
            {services.map((service, index) => (
              <div
                key={index}
                className={`row items-center mb-12 ${
                  index % 2 === 1 ? "flex-row-reverse" : ""
                }`}
              >
                <div className="col-12 lg:col-3 flex justify-center">
                  <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="col-12 lg:col-9 mt-6 lg:mt-0">
                  <h2 className="h3">{service.title}</h2>
                  <p className="mt-4 text-lg">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-primary mt-0.5 shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {call_to_action && <Cta cta={call_to_action} />}
    </>
  );
}

export default Services;
