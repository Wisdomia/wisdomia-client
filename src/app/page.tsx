import About from "@/components/sections/about/About";
import Benefits from "@/components/sections/benefits/Benefits";
import Footer from "@/components/sections/footer/Footer";
import Roadmap from "@/components/sections/roadmap/Roadmap";
import Tokenomics from "@/components/sections/tokenomics/Tokenomics";
import Welcome from "@/components/welcome/Welcome";
import { ScrollProvider } from "./context";

export default function Home() {
  return (
    <div className="home">
      <ScrollProvider>
        <Welcome />
        <About />
        <Tokenomics />
        <Benefits />
        <Roadmap />
        <Footer />
      </ScrollProvider>
    </div>
  );
}
