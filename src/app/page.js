import config from "@config/config.json";
import Cta from "@layouts/components/Cta";
import SeoMeta from "@layouts/SeoMeta";
import HomeBanner from "@layouts/partials/HomeBanner";
import HomeFeatures from "@layouts/partials/HomeFeatures";
import HomePortfolio from "@layouts/partials/HomePortfolio";
import HomeStats from "@layouts/partials/HomeStats";
import HomeTestimonials from "@layouts/partials/HomeTestimonials";
import Services from "@layouts/partials/Services";
import Workflow from "@layouts/partials/Workflow";
import { getListPage } from "../lib/contentParser";

const Home = async () => {
  const homePage = await getListPage("src/content/_index.md");
  const { frontmatter } = homePage;
  const { banner, stats, feature, services, portfolio, testimonials, workflow, call_to_action } = frontmatter;
  const { title } = config.site;

  return (
    <>
      <SeoMeta title={title} />
      <HomeBanner banner={banner} />
      <HomeStats stats={stats} />
      <HomeFeatures feature={feature} />
      <Services services={services} />
      <HomePortfolio portfolio={portfolio} />
      <HomeTestimonials testimonials={testimonials} />
      <Workflow workflow={workflow} />
      <Cta cta={call_to_action} />
    </>
  );
};

export default Home;
