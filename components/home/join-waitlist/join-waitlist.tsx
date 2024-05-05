import plugImg from "@/public/images/unrounded-plug.png";
import ExportedImage from "next-image-export-optimizer";
import Container from "../../container";
import WaitlistForm from "./waitlist-form";

export default function WaitList() {
  return (
    <Container className="flex flex-col justify-center bg-[#F6F8F7] text-black">
      <div className="flex flex-col justify-center md:h-[410px] md:flex-row">
        <div className="flex h-full w-full flex-1 flex-col justify-center rounded-3xl bg-[#54645D] p-6 lg:p-14 text-white lg:rounded-br-none lg:rounded-tr-none">
          <div className="text-4xl font-bold mb-2">Join the WaitList</div>
          <div className="mb-10 mt-4 text-lg">
            Be among the first to experience the future of EV charging. Enter
            your email address to secure your spot.
          </div>
          <div className="relative w-full">
            <WaitlistForm />
          </div>
        </div>
        <div className="h-full w-full flex-1 max-lg:hidden">
          <ExportedImage
            className="h-full w-full rounded-r-3xl"
            src={plugImg}
            alt="plug in"
          />
        </div>
      </div>
    </Container>
  );
}
