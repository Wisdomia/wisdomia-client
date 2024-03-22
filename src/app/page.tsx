import About from "@/components/sections/about/About";
import Welcome from "@/components/welcome/Welcome";

export default function Home() {
  return (
    <div className="home">
      <Welcome/>
      <About text="Hola sparrow, hellloooo!!" title="Hola" image={""}/>
    </div>
  );
}
