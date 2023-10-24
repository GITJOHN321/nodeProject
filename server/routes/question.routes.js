import { Router } from "express";
import {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/question.controllers.js";
const router = Router();

router.get("/questions", getQuestions);
router.get("/questions/:id", getQuestion);
router.put("/questions/:id", updateQuestion);
router.delete("/questions/:id", deleteQuestion);
router.post("/question", createQuestion);

export default router;
