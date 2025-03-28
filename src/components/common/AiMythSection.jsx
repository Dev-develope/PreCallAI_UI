import { cardData } from "src/constants/naviation";
import CommonButton from "./Button";

export default function AiMythsSection() {
    return (
        <section className="text-center py-12 px-4 bg-gray-50">
            <button className="px-4 py-1 text-sm bg-green-100 text-green-700 rounded-full">Key Benefits</button>
            <h2 className="text-3xl font-bold text-gray-900 mt-4">
                Breaking AI Myths  The Truth <br /> About AI Call Centers
            </h2>
            <p className="text-gray-600 mt-2">to improve engagement and drive results.</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {cardData?.map((ele, index) => (
                    <div key={ele.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-50">
                        <p className="text-xs text-gray-500">Myth 3</p>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2">
                            AI Will Replace Human Agents
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Reality: AI assists, not replaces. 80% of calls can be handled by AI, freeing human agents for complex cases.
                        </p>
                    </div>
                ))}
            </div>
            <p className="text-gray-600 mt-6">
                <span className="font-medium">Smarter Workflows</span> = <span className="font-medium">Better Efficiency</span> = <span className="font-medium">More Revenue</span>
            </p>
            <CommonButton title="Try QCall.ai today" className="bg-purple-500 mt-5 text-white text-sm rounded-full"/>
         
        </section>
    );
}
