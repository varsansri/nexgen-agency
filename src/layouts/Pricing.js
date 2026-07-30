import Link from "next/link";
import Cta from "./components/Cta";

function Pricing({ data }) {
  const { frontmatter: { title, plans, call_to_action } } = data;
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="text-center mb-12">{title}</h1>
          <div className="row justify-center">
            {plans.map((plan, i) => (
              <div key={i} className={`col-12 md:col-4 mb-6 ${plan.recommended ? "lg:-mt-4" : ""}`}>
                <div className={`card text-center h-full ${plan.recommended ? "border-primary shadow-lg" : ""}`}>
                  <h3 className="h4 text-text-dark">{plan.title}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-text-dark">${plan.price}</span>
                    <span className="text-text">/{plan.type}</span>
                  </div>
                  <p className="mt-3 text-text text-sm">{plan.subtitle}</p>
                  <ul className="mt-6 space-y-2 text-left">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2 text-text text-sm">
                        <svg className="w-4 h-4 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link className={`btn mt-8 w-full text-center ${plan.recommended ? "btn-primary" : "btn-outline-primary"}`}
                    href={plan.button.link}>
                    {plan.button.label}
                  </Link>
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

export default Pricing;
