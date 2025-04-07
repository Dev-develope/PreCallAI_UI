import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RetailFeatures from "src/components/common/RetailFeatures";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import { reatilSafety, retailFeaturesData, retailHerocardData, retailHeroData, retailTeamsData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={retailHeroData[0]} herocardData={retailHerocardData}>
            <SingleButton title="Get a Demo Today!!" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={retailTeamsData} />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <CommonCardB cardDatas={cardDataD} />
        <CommonCard cardDatas={cardDataE} />
        <CommonCardB cardDatas={cardDataF} />
        <CommonCard cardDatas={cardDataE} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-purple-500 font-light text-white" title="try it now for free!!!" />
        </div>
        <RetailFeatures data={retailFeaturesData} />
        
        <Exploring />
    </>)
}