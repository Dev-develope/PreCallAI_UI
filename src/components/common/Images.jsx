import Image from "next/image";
// import img from "../../../public/images/pexels-cottonbro-6153343 (1).jpg"
export default function Images({ path }) {
    return (<>
        <div className="mt-[1rem]">
            <div className="flex justify-center container mx-auto">
                <Image
                    src="/path"
                    alt="QCall.ai Demo"
                    width={968}
                    height={400}
                    className="rounded-lg shadow-lg bg-amber-100 object-fill w-full"
                />
            </div>
        </div>
    </>)
}