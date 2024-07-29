import HeroSection from "./components/hero-section";
import Advantages from "./components/advantages";
import ResellersSection from "./components/ressellers";
import AdvantagesSection from "./components/springsAdvantages";
import Location from "./components/location";
import Faqs from "./components/faq";
import SerialsSprings from "./components/serialsSprings";
import CustomsSprings from "./components/customSprings";
import Footer from "./components/footer";
import Stats from "./components/stats";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      {/* <Advantages /> */}
      <ResellersSection />
      <Stats />
      <SerialsSprings />
      <CustomsSprings />
      <AdvantagesSection />
      {/* <Location />
      <Faqs /> */}
      <Footer />
    </main >
  );
}
