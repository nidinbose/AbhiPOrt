import Image from "next/image";
import Hero from "./Components/Hero";
import About from "./Components/About";
import GoogleAd from "./Components/GoogleAd";
import MetaAd from "./Components/Meta";

export default function Home() {
  return (
   
     <div>
      <Hero/>
      <About/>
      <GoogleAd/>
      <MetaAd/>
     </div>
  );
}
