import Border from "../../../ui/Border";
import Button from "../../../ui/Button";
import Section12 from "./Section12";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section55 from "./Section55";

function MaintContent() {
  return (
    <div className="mx-auto">
      <Section12 />
      <div className="mt-[60px]">
        <Border />
      </div>
      <div className="mt-[48px]">
        <Button bgcolor="#FFE7DF" border="#FFE7DF" textcolor="#FE3E01">
          حالت نمایش
        </Button>
      </div>
      <Section2 />
      <div className="mt-[48px]">
        <Button bgcolor="#FFE7DF" border="#FFE7DF" textcolor="#FE3E01">
          امکانات
        </Button>
      </div>
      <Section3 />
      <Section4 />
      <Section55 />
      <div className="mt-[60px]">
        <Border />
      </div>
    </div>
  );
}

export default MaintContent;
