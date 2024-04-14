import BtnLink from "../btn-link";
import Container from "../container";

export default function OtherQuestions() {
  return (
    <Container excludeTop className="bg-white text-black">
      <div className="rounded-xl bg-[#EEFFF4] py-10 text-center md:py-20">
        <div className="text-2xl font-bold">Still have questions?</div>
        <div className="mb-6 mt-4">
          Contact our friendly team, they would be happy to answer any question
        </div>
        <div className="flex w-full justify-center">
          <BtnLink to="contact" title="Contact us" />
        </div>
      </div>
    </Container>
  );
}
