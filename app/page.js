import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import Hero from "@/components/sections/Hero";
import PartnerCarousel from "@/components/sections/PartnerCarousel";
import StrategicPillars from "@/components/sections/StrategicPillars";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <StrategicPillars />
      <About />
      <PartnerCarousel />
      {/* <Approach /> */}
    </div>
  );
}
