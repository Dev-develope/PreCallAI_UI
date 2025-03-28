import CommonButton from "./Button";

export default function SingleButton({ title, className }) {
    return (<>
        <div className="mt-6 flex flex-wrap justify-center gap-3 sm:gap-4 hero-mobile">
            <CommonButton className="bg-purple-600 text-xs sm:text-sm font-light px-4 sm:px-6 py-2 sm:py-3 shadow-lg" title={title} />
        </div>
    </>)
}