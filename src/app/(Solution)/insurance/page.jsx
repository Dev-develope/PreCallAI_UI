import AiFeatures from "src/components/common/AiFeatures";
import CommonButton from "src/components/common/Button";
import CardItem3 from "src/components/common/CardItem3";
import CommonCard from "src/components/common/CommonCard";
import CommonCardB from "src/components/common/CommonCardB";
import Exploring from "src/components/common/Exploring";
import Hero from "src/components/common/Hero";
import LogoSlider from "src/components/common/LogoSlider";
import Pricing from "src/components/common/Pricing";
import QCallHeroSection from "src/components/common/QCallHeroSection";
import SecurityCompliance from "src/components/common/SecurityComplianceSection";
import SecurityComplianceSection from "src/components/common/SecurityComplianceSection";
import SingleButton from "src/components/common/SingleButton";
import { cardDataA, cardDataB, cardDataC, cardDataD, cardDataE, cardDataF } from "src/constants/ai_contact_center";
import { faithSafety, InsuranceHeroData, InsuranceSafety, insureanceHerocardData, pricingPlans } from "src/constants/Insurance";
// }
export default function page() {
    return (<>
        <Hero data={InsuranceHeroData[0]} herocardData={insureanceHerocardData}>
            <SingleButton title="Get a Demo" />
        </Hero>
        <LogoSlider />
        <Pricing pricingPlans={InsuranceSafety} />
        <SecurityCompliance/>
        <Exploring />
    </>)
}