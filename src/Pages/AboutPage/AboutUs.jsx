import AboutMe from "./AboutMe";
import Section11 from "./Section11";
import Section14 from "./Section14";
import Section12 from "./Section12";
import Section13 from "./Section13";
import Section15 from "./Section15";
import Section16 from "./Section16";
import Footer from "./Footer";
import NavBar from "../../HomePage/NavBar";
import OurJop from "./OurJop";

export default function AboutUs() {
  return (
    <div>
      <NavBar/>
      <AboutMe></AboutMe>
      <Section14></Section14>
      <Section12></Section12>
      <Section15></Section15>
      <Section13></Section13>
      <Section11></Section11>
      <OurJop/>
      {/* <Section16></Section16> */}
      <Footer></Footer>
    </div>
  )
}


