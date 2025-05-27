import Border from "../../../ui/Border";
import Section4 from "../MainContentP2Mobile/Section4";
import Section55 from "../MainContentP2Mobile/Section55";
import QuestionList from "./QuestionList";

function FrequentlyQuestions() {
  return (
    <div>
      <div className="mt-[112px] flex justify-start">
        <p className="text-[32px] leading-[180%] font-[700px] text-[#0182FE]">
          سوالات متداول
        </p>
        <div className="mt-[60px] h-[544px] w-[808px] py-16">
          <QuestionList />
        </div>
      </div>
      <div className="mt-[200px]">
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
