import AiFeatures from "src/components/common/AiFeatures";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import HeroCard from "src/components/common/HeroCard";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import QCallHeroSection from "src/components/common/QCallHeroSection";
import SingleButton from "src/components/common/SingleButton";
import { aiSalesHeroData, herocardData, herocardDataAiSales } from "src/constants/ai-sales";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF, HumanLikeVoice, pricingPlans } from "src/constants/ai_contact_center";

export default function page() {
    return (<>
        <Hero data={aiSalesHeroData[0]} herocardData={herocardData}>
            <SingleButton title="Schedule a Demo" />
        </Hero>
        <LogoSlider />
        <AiFeatures />
        <Pricing pricingPlans={HumanLikeVoice} />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <QCallHeroSection/>
        <CommonCardB cardDatas={cardDataD} />
        <CommonCard cardDatas={cardDataE} />
        <CommonCardB cardDatas={cardDataF} />
        <Pricing pricingPlans={pricingPlans} />
        <Exploring />
    </>)
}