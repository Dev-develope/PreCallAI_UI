import AiMythsSection from "src/components/common/AiMythSection";
import CardItem1 from "src/components/common/CardItem1";
import CardItem2 from "src/components/common/CardItem2";
import CardItem3 from "src/components/common/CardItem3";
import DoubleButton from "src/components/common/DoubleButton";
import Exploring from "src/components/common/Exploring";
import Faq from "src/components/common/Faq";
import FinalThuoght from "src/components/common/FinalThuoght";
import Future from "src/components/common/Future";
import Hero from "src/components/common/Hero";
import Images from "src/components/common/Images";
import Language from "src/components/common/Language";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import Steps from "src/components/common/Steps";
import UpgradeSection from "src/components/common/UpgradeSection";
// import VideoComponent from "src/components/common/VideoComponent";
import { HomeHeroSectionData } from "src/constants/HomeHeroSectionData";
export default function Home() {
  return (
    <>
      {/* <VideoComponent/> */}
      <Hero data={HomeHeroSectionData[0]}>
        <DoubleButton title1="Try It Now For Free" title2="Book a Demo" />
      </Hero>
      <Images />
      <CardItem1 />
      <LogoSlider />
      <CardItem2 />
      <CardItem3 />
      <Language />
      <Steps />
      <AiMythsSection />
      <Future />
      <UpgradeSection />
      <FinalThuoght />
      <Pricing />
      <Faq />
      <Exploring />
    </>
  );
}





