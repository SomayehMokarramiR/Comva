import Border from "../../../ui/Border";
import Section4 from "../MainContentP2Mobile/Section4";
import Section55 from "../MainContentP2Mobile/Section55";
import ContentContactUs from "./ContentContactUs";
function ContactUs() {
  return (
    <div className="relative">
      <ContentContactUs />
      <div className="mt-[430px]">
        <Section4 />
      </div>
      <div className="mt-[60px]">
        <Border />
      </div>
      <Section55 />
    </div>
  );
}

export default ContactUs;
