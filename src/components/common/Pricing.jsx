import CommonButton from "./Button";

export default function Pricing() {
    return (
        <div className="relative w-full h-[30rem] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <span className="text-sm px-3 py-1 border border-green-500 rounded-full">
                    Pricing
                </span>
                <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold mt-4">
                    PreCallAI costs start from <br /> $0.03 per minute.
                </h1>
                <p className="text-xs mt-2 max-w-md">
                    Try PreCallAI free for 14 days and explore why hundreds of companies
                    big and small stay connected with QCall.
                </p>
                <CommonButton title="Explore more plans" className="text-sm mt-6 bg-purple-600 hover:bg-purple-700 rounded-full"/>
            </div>
        </div>
    );
}
