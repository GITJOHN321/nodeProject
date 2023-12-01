import { useEffect } from "react"
import { useQuestions } from "../context/QuestionContext"

function QuestionPage(){

    const {getQuestions, Questions} = useQuestions()

    useEffect(() => {
        getQuestions()
    },[])
    return (
        <div>{Questions.map((question) =>(
            <div key={question.id_question}>
                <h1>{question.title}</h1>
                <p>{question.body}</p>
            </div>
        ))}</div>
    )
}

export default QuestionPage