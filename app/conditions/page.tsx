import Container from "@/components/about-us/container";
import ContactNav from "@/components/contact-nav/contact-nav";

export default function TermsAndConditions() {
  return (
    <div>
      <ContactNav />
      <Container className="flex flex-col bg-white text-black items-center">
        <div className="bg-white text-black mt-5">
          <div className="text-4xl font-bold mb-10">Terms and conditions</div>
          <div className="font-bold text-xl mb-5">Last updated : March 19, 2024</div>
          <div>
            We, Charge Me Now LLC ('C M N', 'Company', 'we', 'us', or 'our'), are a registered
            company located in Broward County, Coral Springs, Florida. We manage the mobile
            application CMN (Charge Me Now), as well as any other associated products and services
            connected to these legal terms (referred to as the 'Legal Terms') that have been
            selected by you or your electric vehicle dealer (together known as the 'Services'). You
            can reach us via phone at (954) 417-7696, email at help@gochargemenow.com These Legal
            Terms form a legally binding agreement between you, whether individually or on behalf of
            an entity ('you'), and Charge Me Now LLC, regarding your use of the Services. By
            accessing the Services, you acknowledge that you have read, understood, and agreed to
            comply with all these Legal Terms. IF YOU DISAGREE WITH ANY PART OF THESE LEGAL TERMS,
            YOU ARE NOT ALLOWED TO USE THE SERVICES, AND YOU MUST STOP USING THEM IMMEDIATELY.
            Additional terms and conditions or documents that may be published in the Services
            periodically are explicitly included here by reference. We reserve the right, at our
            sole discretion, to amend or modify these Legal Terms at any time and for any reason.
            Notification of any changes will be provided by updating the 'Last updated' date of
            these Legal Terms. It is your responsibility to regularly review these Legal Terms to
            stay informed of any updates. By continuing to use the Services after the posting of any
            revised Legal Terms, you will be considered to have accepted the changes. All users who
            are minors in their jurisdiction (usually under the age of 18) must obtain permission
            from, and be directly supervised by, their parents or guardians to use the Services. If
            you are a minor, your parent or guardian must read and agree to these Legal Terms before
            you can use the Services.
            <div>1. Acceptance of Terms:</div>
            <div>
              By using the Services provided by Charge Me Now, you agree to be bound by these Terms
              of Service. If you do not agree with any part of these Terms, you may not access or
              use our Services.
            </div>
            <div>Description of Services:</div>
            <div>
              Charge Me Now provides mobile EV charging stations and roadside assistance for
              electric vehicles. Our services aim to assist EV owners in recharging their vehicles
              conveniently and providing roadside support in case of emergencies or technical
              difficulties.
            </div>
            <div>Service Coverage:</div>
            <div>Limited to Broward County area.</div>
            <div>Service Location:</div>
            <div>
              Our services are primarily conducted in covered car parks. However, services will not
              be carried out in open outdoor areas during rainy conditions.
            </div>
            <div>Safety Compliance:</div>
            <div>Charging operations must adhere to all traffic and safety regulations.</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
