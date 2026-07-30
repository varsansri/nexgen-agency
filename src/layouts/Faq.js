import { markdownify } from "@lib/utils/textConverter";

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        <h1 className="text-center mb-12">{title}</h1>
        <div className="row">
          {faqs.map((faq, i) => (
            <div key={i} className="col-12 md:col-6 mb-6">
              <div className="p-8 border border-border rounded-xl bg-body">
                <div className="faq-head relative">
                  <h4 className="text-text-dark">{faq.title}</h4>
                </div>
                <p className="faq-body mt-3 text-text text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
