import Navbar from "./components/Navbar";
import TwoColumnComponent from "./components/TwoColumnComponent";
import FourColumnComponent from "./components/FourColumnComponent";
import FeatureComponent from "./components/FeatureComponent";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import FiveColumnRow from "./components/FiveColumnRow";
import AboutAdashe from "./components/AboutAdashe";
import Documents from "./components/Documents";
import FAQ from "./components/FAQ";
import Team from "./components/Team";
import AdvisorsComponent from "./components/Advisors";
import LatestNews from "./components/LatestNews";
import FeaturedOn from "./components/FeaturedOn";
import Exchanges from "./components/Exchanges";

function App() {
  return (
    <div>
      <Navbar />
      <TwoColumnComponent />
      <FourColumnComponent />
      <FeatureComponent />
      <Roadmap />
      <Partners />
      <FiveColumnRow />
      <AboutAdashe />
      <Documents />
      <FAQ />
      <Team />
      <AdvisorsComponent />
      <LatestNews />
      <FeaturedOn />
      <Exchanges />
    </div>
  );
}
export default App;