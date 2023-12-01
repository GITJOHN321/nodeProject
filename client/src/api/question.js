import axios from "./axios";

export const getQuestionsRequest = () => axios.get('/questions')
export const getQuestionRequest = (id) => axios.get(`/questions/${id}`)
export const createQuestionsRequest = (question) => axios.post('/questions', question)
export const putQuestionsRequest = (question) => axios.put(`/questions/${question.id}`, question)
export const deleteQuestionsRequest = (id) => axios.delete(`/questions/${id}`)