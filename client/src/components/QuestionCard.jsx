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
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              console.log(question.id_question)
              deleteQuestion(question.id_question);
            }}
          >
            delete
          </button>
          
          <Link to={`/questions/${question.id_question}`} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >Edit</Link>
        </div>
      </header>

      <p className="text-slate-300">{question.body}</p>
      <p>{new Date(question.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
export default QuestionCard;
