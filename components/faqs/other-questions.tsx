import Link from "next/link";
import Container from "../container";

export default function OtherQuestions() {
  return (
    <Container excludeTop className="bg-white text-black">
      <div className="bg-[#EEFFF4] rounded-xl text-center py-10 md:py-20">
        <div className="text-2xl font-bold">Still have questions?</div>
        <div className="mt-4 mb-6">Contact our friendly team, they would be happy to answer any question</div>
        <div className="w-full flex justify-center">
          <Link
            href={"/contact"}
            className="bg-[#00A63D] font-medium cursor-pointer hover:opacity-70 active:opacity-100 text-white px-2 py-2 rounded-md"
          >
            Contact us
          </Link>
        </div>
      </div>
    </Container>
  );
}
