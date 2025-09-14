import Image from "next/image";
import Hero from "./Components/Hero";
import About from "./Components/About";
import GoogleAd from "./Components/GoogleAd";
import MetaAd from "./Components/Meta";
import EmailMarketing from "./Components/Email";
import Pages from "./Components/PAGES";
import AppPromotion from "./Components/Promotion";
import ToolsPage from "./Components/tools";

export default function Home() {
  return (
   
     <div className="overflow-x-hidden">
      <Hero/>
      <About/>
      <ToolsPage/>
      <GoogleAd/>
       <AppPromotion/>
      <MetaAd/>
      <EmailMarketing/>
      <Pages/>
     
     </div>
  );
}
