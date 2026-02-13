import IntroductionSection from "../components/homepage/IntroductionSection";
import DetailSection from "../components/homepage/DetailSection";
import ExperienceSection from "../components/homepage/ExperienceSection";
import FeatureSection from "../components/homepage/FeatureSection";
const HomePage = () => {
  return (
    <div id="homepage" className="max-w-screen min-h-[100vh]">
      <IntroductionSection />
      <DetailSection />
      <ExperienceSection />
      <FeatureSection />
    </div>
  );
};

export default HomePage;
