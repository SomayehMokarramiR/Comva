import QuestionList from "./QuestionList";
function ContentQuestion() {
  return (
    <>
      <div className="mt-[50px] flex justify-start">
        <p className="text-[32px] leading-[180%] font-[700px] text-[#0182FE]">
          سوالات متداول
        </p>
        <div className="mt-[60px] h-[544px] w-[808px] py-16">
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default ContentQuestion;
