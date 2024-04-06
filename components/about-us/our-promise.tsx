import Image from "next/image";

export default function OurPromise() {
  return (
    <div className="bg-[#EEFFF4] text-black py-14 md:py-28 px-2 sm:px-8 md:px-16 lg:px-36">
      <div className="text-center ">
        <div className="font-bold text-4xl">Our promise to you</div>
      </div>
      <div className="flex flex-col max-sm:gap-8 sm:flex-row justify-around items-center">
        <Step
          name="Reliability"
          description="Count on us to deliver a reliable and efficient charging experience whenever you request our services.
          "
          image="/okay.png"
        />
        <Step
          name="Flexibility"
          description="Your schedule is our priority. Request a charge at a time and location that suits you best.
          "
          image="/flexibility.png"
        />
        <Step
          name="Environmental impact"
          description="Join us in making a positive impact on the environment. Every charge with us contributes to a more sustainable future.
          "
          image="/eco.png"
        />
      </div>
    </div>
  );
}

function Step({ name, image, description }: { name: string; image: string; description: string }) {
  return (
    <div className="flex items-center gap-4 px-2 sm:px-8 md:px-12 xl:px-20 2xl:px-24">
      <div>
        <Image src={image} width={75} height={75} alt={name} />
      </div>
      <div>
        <div className="mt-8 mb-4 font-semibold text-2xl">{name}</div>
        <div className="font-light">{description}</div>
      </div>
    </div>
  );
}
