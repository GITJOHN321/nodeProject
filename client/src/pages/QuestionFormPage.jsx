import { useForm } from "react-hook-form";
import { useQuestions } from "../context/QuestionContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function QuestionFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createQuestion, getQuestion, updateQuestion } = useQuestions();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadQuestion() {
      if (params.id) {
        const question = await getQuestion(params.id);
        console.log(question);
        setValue("title", question.title);
        setValue("body", question.body);
      }
    }
    loadQuestion();
  }, []);
  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateQuestion(params.id, data)
    } else {
      createQuestion(data);
    }
    navigate("/questions");
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="my-2">New Question</h1>
        <form onSubmit={onSubmit}>
          <input
            placeholder="title"
            type="text"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <textarea
            placeholder="Description"
            rows="3"
            {...register("body")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default QuestionFormPage;
