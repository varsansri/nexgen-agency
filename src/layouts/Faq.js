import { markdownify } from "@lib/utils/textConverter";

const stagger = (i) => ({
  animation: `fadeInUp 300ms var(--ease-out) forwards`,
  animationDelay: `${i * 50}ms`,
  opacity: 0,
});

function Faq({ data }) {
  const { frontmatter } = data;
  const { title, faqs } = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row -mt-6">
          {faqs.map((faq, index) => (
            <div key={index} className="col-12 mt-6 md:col-6" style={stagger(index)}>
              <div className="p-12 shadow" style={{
                transition: "transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out)",
              }}>
                <div className="faq-head relative">
                  {markdownify(faq.title, "h4", "h5")}
                </div>
                {markdownify(faq.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
