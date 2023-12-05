import { useEffect } from "react";
import { useQuestions } from "../context/QuestionContext";
import QuestionCard from "../components/QuestionCard";
function QuestionPage() {
  const { getQuestions, Questions } = useQuestions();
  

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className="grid sm:grid-cols-3 grid-cols-2 gap-2">
      {Questions.map((question) => (
        <QuestionCard
          question={question}
          key={question.id_question}
        ></QuestionCard>
      ))}
    </div>
  );
}

export default QuestionPage;
