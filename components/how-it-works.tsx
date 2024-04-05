import Image from "next/image";

export default function HowItWorks() {
  return (
    <div className="bg-white text-black py-28 px-2 sm:px-8 md:px-16 lg:px-36">
      <div className="text-center ">
        <div className="font-bold text-3xl">Here&apos;s how it works</div>
        <div className="font-light mt-4 mb-16">Get started in 3 easy steps</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row justify-around items-center">
        <Step
          name="Download the app"
          description="Our user-friendly app is your charging control center."
          image="/asd.png"
        />
        <Step
          name="Request charge"
          description="Select your location, desired service, and a time that works for you."
          image="/req.png"
        />
        <Step
          name="Get charged"
          description="Our truck arrives on time and powers up your vehicle."
          image="/bat.png"
        />
      </div>
    </div>
  );
}

function Step({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center px-2 sm:px-8 md:px-16 lg:20-36">
      <Image src={image} width={75} height={75} alt={name} />
      <div className="mt-8 mb-4 font-semibold text-2xl">{name}</div>
      <div className="font-light">{description}</div>
    </div>
  );
}
