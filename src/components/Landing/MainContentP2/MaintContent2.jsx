import Border from "../../../ui/border";
import Button from "../../../ui/Button";
import Section12 from "./Section12";
import Section2 from "../MainContent/Section2";
import Section3 from "../MainContent/Section3";
import Section4 from "../MainContent/Section4";
import Section55 from "../MainContent/Section55";

function MaintContent() {
  return (
    <div className="mx-auto">
      <Section12 />
      <Border />
      <div className="mt-[80px]">
        <Button>حالت نمایش</Button>
      </div>
      <Section2 />
      <div className="mt-[200px]">
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
