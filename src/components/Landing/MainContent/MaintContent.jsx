import Border from "../../../ui/border";
import Button from "../../../ui/Button";
import Footer from "../Footer";
import Section1 from "./Section1";
import Section12 from "./Section12";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section55 from "./Section55";

function MaintContent() {
  return (
    <div className="mx-auto">
      {/* <Section1 /> */}
      <Section12 />
      <Border />
      <div className="mt-[80px]">
        <Button>حالت نمایش</Button>
      </div>
      <Section2 />
      <div className="mt-[80px]">
        <Button>امکانات</Button>
      </div>
      <Section3 />
      <Section4 />
      <Section55 />
      <Border />
    </div>
  );
}

export default MaintContent;
