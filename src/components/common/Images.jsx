import Image from "next/image";

export default function Images({ img, overlayImg }) {
  return (
    <div className="relative mt-4">
      {/* Main Background Image */}
      <div className="flex justify-center container mx-auto relative">
        <Image
          src={img}
          alt="QCall.ai Demo"
          width={900}
          height={400}
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Overlay Image */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image
          src={overlayImg}
          alt="Overlay"
          width={968}
          height={400}
          className="object-cover"
        />
      </div>
    </div>
  );
}
