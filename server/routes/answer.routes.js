import { Router } from "express";
import {
  getAnswer,
  getAnswers,
  postAnswer,
  deleteAnswer,
  updateAnswer,
} from "../controllers/answer.controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createAnswerSchema } from "../schemas/answer.schema.js";
const router = Router();

router.get("/answers", authRequired, getAnswers);
router.get("/answers/:id", authRequired, getAnswer);
router.put("/answers/:id", authRequired, updateAnswer);
router.delete("/answers/:id", authRequired, deleteAnswer);
router.post(
  "/answers",
  authRequired,
  validateSchema(createAnswerSchema),
  postAnswer
);

export default router;
