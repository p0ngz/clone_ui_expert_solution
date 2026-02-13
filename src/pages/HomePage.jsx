import IntroductionSection from "../components/homepage/IntroductionSection";
import DetailSection from "../components/homepage/DetailSection";
import ExperienceSection from "../components/homepage/ExperienceSection";
const HomePage = () => {
  return (
    <div id="homepage" className="max-w-screen min-h-[100vh]">
      <IntroductionSection />
      <DetailSection />
      <ExperienceSection />
    </div>
  );
};

export default HomePage;
