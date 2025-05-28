import Border from "../../../ui/Border";
import Section4 from "../MainContentP2Mobile/Section4";
import Section55 from "../MainContentP2Mobile/Section55";
import ContentQuestion from "./ContentQuestion";

function FrequentlyQuestions() {
  return (
    <div>
      <ContentQuestion />
      <div className="mt-[160px]">
        <Section4 />
      </div>
      <div className="mt-[60px]">
        <Border />
      </div>
      <Section55 />
    </div>
  );
}

export default FrequentlyQuestions;
