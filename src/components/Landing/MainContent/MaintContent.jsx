import Border from "../../../ui/Border";
import Button from "../../../ui/Button";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section55 from "./Section55";

function MaintContent() {
  return (
    <div className="mx-auto">
      <Section1 />
      <div w={1224} className="mt-[89px]">
        <Border />
      </div>
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
      <Border w={1224} />
    </div>
  );
}

export default MaintContent;
