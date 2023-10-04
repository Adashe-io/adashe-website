import Navbar from "./components/Navbar";
import TwoColumnComponent from "./components/TwoColumnComponent";
import FourColumnComponent from "./components/FourColumnComponent";
import FeatureComponent from "./components/FeatureComponent";
import Roadmap from "./components/Roadmap";
import Partners from "./components/Partners";
import FiveColumnRow from "./components/FiveColumnRow";

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
    </div>
  );
}
export default App;