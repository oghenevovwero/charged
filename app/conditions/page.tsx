import Container from "@/components/about-us/container";
import ContactNav from "@/components/contact-nav/contact-nav";

export default function TermsAndConditions() {
  return (
    <div>
      <ContactNav />
      <Container className="flex flex-col bg-white text-black items-center">
        <div className="bg-white text-black mt-5">
          <div className="text-4xl font-bold mb-10">Terms and conditions</div>
        </div>
      </Container>
    </div>
  );
}
