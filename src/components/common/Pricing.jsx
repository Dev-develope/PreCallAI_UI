import CommonButton from "./Button";



export default function Pricing({ pricingPlans,video }) {
    return (
        <div className="relative w-full h-[30rem] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {pricingPlans?.map((plan) => (
                <div key={plan.id} className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                    {plan.label && ( // Render only if plan.label is available
                        <span className="px-4 py-1 border border-gray-300 rounded-full text-xs">
                            {plan.label}
                        </span>
                    )}
                    <h1 className="text-[clamp(1.5rem,4vw,2rem)] font-bold mt-4 max-w-96">
                        {plan.title}
                    </h1>
                    <p className="text-xs mt-2 max-w-md">
                        {plan.description}
                    </p>
                    <CommonButton title={plan.buttonText} className="text-sm mt-6 bg-purple-600 hover:bg-purple-700 rounded-full" />
                </div>
            ))}
        </div>
    );
}
