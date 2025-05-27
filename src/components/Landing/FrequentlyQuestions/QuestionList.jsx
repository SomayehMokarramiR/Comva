import Question from "./Question";

const dataQuestions = [
  {
    id: 1,
    text: "کارت ساز چیست و به چه کار آید؟",
  },
  {
    id: 2,
    text: "کارت ساز چطور به کسب و کار من کمک میکند؟",
  },
  {
    id: 3,
    text: "آیا کارت ساز رایگان است؟",
  },
  {
    id: 4,
    text: "راه های ارتباطی در کارت ساز چیست؟",
  },
  {
    id: 5,
    text: "آیا اطلاعات من محفوظ است؟",
  },
  {
    id: 6,
    text: "کارت ساز توسط چه کسانی اداره میشود؟",
  },
  {
    id: 7,
    text: "کارت ساز توسط چه کسانی اداره میشود؟",
  },
];
function QuestionList() {
  return (
    <div>
      {dataQuestions.map((item) => (
        <Question questionText={item.text} key={item.id} id={item.id} />
      ))}
    </div>
  );
}

export default QuestionList;
