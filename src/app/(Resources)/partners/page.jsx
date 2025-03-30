import DoubleButton from "src/components/common/DoubleButton";
import Exploring from "src/components/common/Exploring";
import FutureCard from "src/components/common/FutureCard";
import Hero from "src/components/common/Hero";
import InsuranceSafetySection from "src/components/common/InsuranceSafetySection";
import LogoSlider from "src/components/common/LogoSlider";
import RealEstateCommunciation from "src/components/common/RealEstateCommunciation";
import SingleButton from "src/components/common/SingleButton";
import {educationHerocardData, educationHeroData, eduVertualCommData, eduVertualCommData2, PartnersHeroData, reatilSafety, stuProInstrucCommuData } from "src/constants/SolutionData";

export default function page() {
    return (<>
        <Hero data={PartnersHeroData[0]} herocardData={educationHerocardData} className="text-center">
            <SingleButton title="Become a Partner" />
        </Hero>
        <LogoSlider />
        <InsuranceSafetySection data={reatilSafety[0]} />
        <FutureCard data={stuProInstrucCommuData[0]} />
        <RealEstateCommunciation data={eduVertualCommData[0]} />
        {/* <RealEstateCommunciation data={eduVertualCommData2[0]} /> */}
        {/* <FutureCard data={smartFeatureData[0]} /> */}
        <Exploring />
    </>)
}