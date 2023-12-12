import { useEffect, useState } from "react";
import { useQuestions } from "../context/QuestionContext";
import QuestionCard from "../components/QuestionCard";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function QuestionPage() {
  const { getQuestions, Questions } = useQuestions();
  const [listQuestions, setListQuestions] = useState([]);
  const [spaceQuill, setSpaceQuill] = useState('');



  const dragingOver = (evt) => {
    evt.preventDefault();
  };

  const onDrop = (evt) => {
    evt.preventDefault()
    const itemID = evt.dataTransfer.getData("itemID");
    const [item] = Questions.filter(
      (question) => question.id_question === parseInt(itemID)
    );
    

    setListQuestions([...listQuestions, `<h1>${item.title}</h1><br>${item.body}<br>`])

    
    setSpaceQuill(spaceQuill+ `<h1>${item.title}</h1><br>${item.body}<br>`)
    console.log(spaceQuill.toString())
  };

  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <>
      <div className="grid sm:grid-cols-3 grid-cols-2 gap-2">
        {Questions.map((question) => (
          <QuestionCard
            question={question}
            key={question.id_question}
          ></QuestionCard>
        ))}
      </div>
      <div
        droppable="true"
        onDragOver={(evt) => dragingOver(evt)}
        onDrop={(evt) => onDrop(evt, Questions)}
      >
        <label htmlFor="body">Espacio Quill</label>
        <ReactQuill
          theme="snow"
          name="body"
          value={spaceQuill}
          onChange={setSpaceQuill}
          placeholder="Write a Description please..."
        ></ReactQuill>
      </div>
      
    </>
  );
}

export default QuestionPage;
