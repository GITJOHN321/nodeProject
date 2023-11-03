import { Router } from "express";
import {
  getQuestions,
  getQuestion,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "../controllers/question.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createQuestionSchema } from "../schemas/question.schema.js";
const router = Router();

router.get("/questions", authRequired, getQuestions);
router.get("/questions/:id", authRequired, getQuestion);
router.put("/questions/:id", authRequired, updateQuestion);
router.delete("/questions/:id", authRequired, deleteQuestion);
router.post(
  "/questions",
  authRequired,
  validateSchema(createQuestionSchema),
  createQuestion
);

export default router;
