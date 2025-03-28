import Image from "next/image";
export default function Images({path}) {
    return (<>
        <div className="mt-[1.5rem]">
            <div className="flex justify-center container mx-auto">
                <Image
                    src="/your-image.png"
                    alt="QCall.ai Demo"
                    width={825}
                    height={300}
                    className="rounded-lg shadow-lg bg-amber-100 py-5"
                />
            </div>
        </div>
    </>)
}