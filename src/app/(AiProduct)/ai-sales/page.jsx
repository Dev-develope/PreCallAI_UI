import AiFeatures from "src/components/common/AiFeatures";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import { HomeHeroSectionData } from "src/constants/HomeHeroSectionData";

export default function page() {
    return (<>
        <Hero data={HomeHeroSectionData[0]}>
            <SingleButton title="Schedule a Demo" />
        </Hero>
        <LogoSlider />
        <AiFeatures />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <CommonCardB cardDatas={cardDataD} />
        <CommonCard cardDatas={cardDataE} />
        <CommonCardB cardDatas={cardDataF} />
        <Pricing />
        <Exploring />
    </>)
}