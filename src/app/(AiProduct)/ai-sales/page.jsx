import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import HeroCard from "src/components/common/HeroCard";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import QCallHeroSection from "src/components/common/QCallHeroSection";
import SingleButton from "src/components/common/SingleButton";
import { aiSalesCardDataA, aiSalesCardDataB, aiSalesCardDataC, aiSalesCardDataD, aiSalesCardDataE, aiSalesHeroData, herocardData, herocardDataAiSales } from "src/constants/ai-sales";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF, HumanLikeVoice, pricingPlans } from "src/constants/ai_contact_center";

export default function page() {
    return (<>
        <Hero data={aiSalesHeroData[0]} herocardData={herocardData} className="text-center">
            <SingleButton title="Schedule a Demo" />
        </Hero>
        <LogoSlider />
        <AiFeatures />
        <Pricing pricingPlans={HumanLikeVoice} />
        <CommonCard cardDatas={aiSalesCardDataA} />
        <CommonCardB cardDatas={aiSalesCardDataB} />
        <CommonCard cardDatas={aiSalesCardDataC} />
        <QCallHeroSection />
        <CommonCardB cardDatas={aiSalesCardDataD} />
        <CommonCard cardDatas={aiSalesCardDataE} />
        <CommonCardB cardDatas={cardDataF} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#7c52fb] font-light text-white" title="try it now for free!!!" />
        </div>
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}