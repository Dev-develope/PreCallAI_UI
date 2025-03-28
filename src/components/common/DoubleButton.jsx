import CommonButton from "./Button";

export default function DoubleButton({ title1, title2 }) {
    return (<>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 hero-mobile">
            <CommonButton className="bg-purple-600 text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2 sm:py-3 shadow-lg" title={title1} />
            <CommonButton className="bg-white text-black text-xs font-semibold px-4 sm:px-6 py-2 sm:py-3 shadow-lg" title={title2} />
        </div>
    </>)
}