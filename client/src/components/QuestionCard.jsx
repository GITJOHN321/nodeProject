import { useQuestions } from "../context/QuestionContext";
import {Link} from 'react-router-dom'
function QuestionCard({ question }) {
  const { deleteQuestion } = useQuestions();
  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{question.title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            onClick={() => {
              deleteQuestion(question.id_question);
            }}
          >
            delete
          </button>
          <Link to={`/questions/${question.id_question}`}>Edit</Link>
        </div>
      </header>

      <p className="text-slate-300">{question.body}</p>
      <p>{new Date(question.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
export default QuestionCard;
