import { useForm } from "react-hook-form";
import { useQuestions } from "../context/QuestionContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function QuestionFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const {
    createQuestion,
    createAnswer,
    getQuestion,
    updateQuestion,
    Questions,
  } = useQuestions();
  const navigate = useNavigate();
  const params = useParams();

  //dinamic InputFields--------------------------------
  const [inputFields, setInputFields] = useState([{ body: "" }]);
  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = (e) => {
    e.preventDefault();
    let newfield = { body: "" };
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    if (index > 0) {
      let data = [...inputFields];
      data.splice(index, 1);
      setInputFields(data);
    }
  };
  //----------------------------------------------------

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

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      updateQuestion(params.id, data);
    } else {
      const idQuestion = await createQuestion(data);

      //console.log(idQuestion.insertId);

      inputFields.map(async (input) => {
        const res = await createAnswer(input.body, idQuestion.insertId);
      });
    }
    navigate("/questions");
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="my-2">New Question</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            placeholder="title"
            type="text"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="body">Description</label>
          <textarea
            placeholder="Description"
            rows="3"
            {...register("body")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label>Answers</label>
          {inputFields.map((inputField, index) => (
            <div key={index} className="relative w-full">
              <input
                className="block w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                type="text"
                name="body"
                value={inputField.body}
                onChange={(event) => handleFormChange(index, event)}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  removeFields(index);
                }}
                className="absolute top-0 end-11 p-2.5 h-full text-sm font-medium text-white bg-blue-700  hover:bg-blue-800  dark:bg-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <button
                onClick={addFields}
                className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-red-700 rounded-e-lg  hover:bg-red-800  dark:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                  />
                </svg>
              </button>
            </div>
          ))}

          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default QuestionFormPage;
