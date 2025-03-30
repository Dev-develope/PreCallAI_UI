import CommonButton from "src/components/common/Button";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import ConnectwithTeams from "src/components/common/ConnectwithTeams";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC} from "src/constants/ai_contact_center";
import { autoAiPowerdSalesData, AutomateHeroData, legalHerocardData, reatilSafety} from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={AutomateHeroData[0]} herocardData={legalHerocardData}>
            <SingleButton title="Get a Demo Today!" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#7c52fb] font-light text-white" title="try it now for free!!!" />
        </div>
        <ConnectwithTeams data={autoAiPowerdSalesData} />
        <CommonCard cardDatas={cardDataA} />
        <CommonCardB cardDatas={cardDataB} />
        <CommonCard cardDatas={cardDataC} />
        <div className="flex justify-center items-center mt-1 mb-10">
            <CommonButton className="bg-[#7c52fb] font-light text-white" title="try it now for free!!!" />
        </div>
        <Exploring />
    </>)
}