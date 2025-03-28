import CommonButton from "./Button";

export default function UpgradeSection() {
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto px-4 py-16 relative text-center">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: "url('/public/Assets/images/img2.jpg')", opacity: 0.3 }}
                    ></div>

                    <div className="relative z-10 flex flex-col items-center ">
                        <span className="px-4 py-1 border border-green-300 rounded-full text-xs bg-black/50">
                            Upgrade
                        </span>
                        <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mt-4">
                            Ready to Upgrade Your Calling Game?
                        </h2>
                        <p className="text-[clamp(1rem,2.5vw,1.25rem)]  mt-4 max-w-xl">
                            Let AI handle the repetitive calls while you focus on growth, customer relationships, and strategic moves.
                        </p>

                        {/* Buttons */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4">
                            <CommonButton title="Start for Free" className="bg-purple-600 text-white" />
                            <CommonButton title="Book a demo" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}