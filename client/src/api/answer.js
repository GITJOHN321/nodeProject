import axios from "./axios";

//export const getQuestionsRequest = () => axios.get('/questions')
//export const getQuestionRequest = (id) => axios.get(`/questions/${id}`)
export const createAnswersRequest = (answer) => axios.post('/answers', answer)
//export const putQuestionsRequest = (id,question) => axios.put(`/questions/${id}`, question)
//export const deleteQuestionsRequest = (id) => axios.delete(`/questions/${id}`)