import About from "@/components/sections/about/About";
import Tokenomics from "@/components/sections/tokenomics/Tokenomics";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <div className="home">
      <Welcome/>
      <About/>
      <Tokenomics/>
    </div>
  );
}
