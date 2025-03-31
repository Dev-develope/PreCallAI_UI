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
import { pricingPlans } from "src/constants/ai_contact_center";
// import VideoComponent from "src/components/common/VideoComponent";
import { HomeHeroSectionData } from "src/constants/HomeHeroSectionData";
import ObjImage from "../../public/images/LandingPage/Object.png"
import overlayImgfrom from "../../public/images/LandingPage/QCall.png"
import LanguageIamge from "../../public/images/LandingPage/BG.png";
import FrameImage from "../../public/images/LandingPage/Frame 1000004818.png"
import Animationvideo2 from "../../public/images/LandingPage/QCallAi Animation 1.mp4"
import CardImage from "../../public/images/LandingPage/DESIGN.png"
import Avetar from "../../public/images/LandingPage/avatar-small-01.png"
import backGroundVideo from "../../public/images/LandingPage/QCallAi Animation 2.mp4"
import BackgroundVideo from "src/components/common/BackgroundVideo";
// import BackgroundVideo from "src/components/common/BackgroundVideo";
export default function Home() {
  return (
    <>
      {/* <BackgroundVideo path={backGroundVideo} /> */}
      <Hero data={HomeHeroSectionData[0]} videoPath={backGroundVideo}>
        <DoubleButton title1="Try It Now For Free" title2="Book a Demo" />
      </Hero>
      <Images img={ObjImage} overlayImg={overlayImgfrom} />
      <CardItem1 />
      <LogoSlider avetar={Avetar} />
      <CardItem2 />
      <CardItem3 />
      <Language img={LanguageIamge} />
      <Steps img={CardImage} />
      <AiMythsSection />
      <Future img={FrameImage} />
      <UpgradeSection img={LanguageIamge} />
      <FinalThuoght />
      <Pricing pricingPlans={pricingPlans} video={Animationvideo2} />
      <Faq />
      <Exploring />
    </>
  );
}





