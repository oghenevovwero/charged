import FaqsBanner from "@/components/faqs/faqs-banner";
import OtherQuestions from "@/components/faqs/other-questions";
import Support from "@/components/faqs/support";
import Footer from "@/components/footer";
import Nav from "@/components/nav/nav";

export default function Faqs(){
  return <div>
    <Nav />
    <FaqsBanner />
    <Support />
    <OtherQuestions />
    <Footer />
  </div>
}
