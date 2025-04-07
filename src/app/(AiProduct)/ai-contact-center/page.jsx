import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { pricingPlans, HumanLikeVoice } from "src/constants/ai_contact_center";
import { herocardData } from "src/constants/ai_contact_center";
import { AiContactHeroData, cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
// }
export default function page() {
    return (<>
        <Hero data={AiContactHeroData[0]} herocardData={herocardData} className="text-center">
            <SingleButton title="Schedule a Demo" />
        </Hero>
        <LogoSlider />
        <AiFeatures />
        <Pricing pricingPlans={HumanLikeVoice} />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <CommonCardB cardDatas={cardDataD} />
        <CommonCard cardDatas={cardDataE} />
        <CommonCardB cardDatas={cardDataF} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#7c52fb] font-light text-white" title="try it now for free!!!"/>
        </div>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}