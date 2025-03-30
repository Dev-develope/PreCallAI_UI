import Image from "next/image";
import Qcall from "../../../public/images/QcallImage3.PNG" 
export default function Images({ path }) {
    return (<>
        <div className="mt-[1rem]">
            <div className="flex justify-center container mx-auto">
                <Image
                    src={Qcall}
                    alt="QCall.ai Demo"
                    width={968}
                    height={400}
                    className="rounded-lg bg-amber-100 object-fill w-full"
                />
            </div>
        </div>
    </>)
}