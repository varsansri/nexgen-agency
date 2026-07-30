import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const HomeFeatures = ({ feature }) => (
  <section className="section bg-light">
    <div className="container">
      <div className="text-center mb-12">
        <h2 className="text-text-dark">{markdownify(feature.title)}</h2>
      </div>
      <div className="row">
        {feature.features.map((item, i) => (
          <div className="col-12 sm:col-6 lg:col-4 mb-6" key={`feature-${i}`}>
            <div className="feature-card rounded-xl p-6 text-center h-full">
              {item.icon && <Image className="mx-auto mb-4" src={item.icon} width={36} height={36} alt="" />}
              {markdownify(item.name, "h3", "h5 mb-3 text-text-dark")}
              <p className="text-text text-sm">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HomeFeatures;
