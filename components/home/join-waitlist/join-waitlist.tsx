import plugImg from "@/public/images/unrounded-plug-c.png";
import ExportedImage from "next-image-export-optimizer";
import Container from "../../container";
import WaitlistForm from "./waitlist-form";

export default function WaitList() {
  return (
    <Container className="flex items-center justify-center bg-[#F6F8F7] text-black">
      <div className="flex flex-col md:h-96 md:flex-row">
        <div className="flex flex-1 flex-col justify-center rounded-3xl bg-[#54645D] p-6 text-white sm:p-20 lg:rounded-br-none lg:rounded-tr-none md:p-20">
          <div className="text-4xl font-bold">Join the WaitList</div>
          <div className="mb-14 mt-4 text-lg">
            Be among the first to experience the future of EV charging. Enter
            your email address to secure your spot.
          </div>
          <div className="relative h-16 w-full">
            <WaitlistForm />
          </div>
        </div>
        <div className="h-96 w-full flex-1 max-lg:hidden">
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
