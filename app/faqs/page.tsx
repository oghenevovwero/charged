import FaqsBanner from "@/components/faqs/faqs-banner";
import OtherQuestions from "@/components/faqs/other-questions";
import Support from "@/components/faqs/support";
import ResponsiveNavigation from "@/components/nav";

export default function Faqs() {
  return (
    <div>
      <ResponsiveNavigation />
      <FaqsBanner />
      <Support />
      <OtherQuestions />
    </div>
  );
}
