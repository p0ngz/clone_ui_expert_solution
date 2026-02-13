import IntroductionSection from "../components/homepage/IntroductionSection";
import DetailSection from "../components/homepage/DetailSection";
const HomePage = () => {
  return (
    <div id="homepage" className="max-w-screen min-h-[100vh]">
      <IntroductionSection />
      <DetailSection />
    </div>
  );
};

export default HomePage;
