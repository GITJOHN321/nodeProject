import { createContext, useContext, useState } from "react";
import {
  createQuestionsRequest,
  getQuestionsRequest,
} from "../api/question.js";

const QuestionContext = createContext();

export const useQuestions = () => {
  const context = useContext(QuestionContext);
  if (!context) {
    throw new Error("useQuestions must be used within a QuestionProvider");
  }
  return context;
};

export function QuestionProvider({ children }) {
  const [Questions, setQuestions] = useState([]);

  const createQuestion = async (question) => {
    try {
      const res = await createQuestionsRequest(question);
    } catch (error) {
      console.error(error);
    }
  };

  const getQuestions = async () => {
    try {
      const res = await getQuestionsRequest();
      console.log(res.data);
      setQuestions(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QuestionContext.Provider
      value={{ Questions, createQuestion, getQuestions }}
    >
      {children}
    </QuestionContext.Provider>
  );
}
