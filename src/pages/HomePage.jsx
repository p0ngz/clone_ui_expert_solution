import IntroductionSection from "../components/homepage/IntroductionSection";
import DetailSection from "../components/homepage/DetailSection";
import ExperienceSection from "../components/homepage/ExperienceSection";
import FeatureSection from "../components/homepage/FeatureSection";
import PartnerSection from "../components/homepage/PartnerSection";
import ResultSection from "../components/homepage/ResultSection";
import SupportServiceSection from "../components/homepage/SupportServiceSection";
import BlogSection from "../components/homepage/BlogSection";
import QASection from "../components/homepage/QASection";
const HomePage = () => {
  return (
    <div id="homepage" className="max-w-screen min-h-[100vh]">
      <IntroductionSection />
      <DetailSection />
      <ExperienceSection />
      <FeatureSection />
      <PartnerSection />
      <ResultSection />
      <SupportServiceSection />
      <BlogSection />
      <QASection />
    </div>
  );
};

export default HomePage;
