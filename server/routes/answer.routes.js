import { Router } from "express";
import {
  getAnswer,
  getAnswers,
  postAnswer,
  deleteAnswer,
  updateAnswer,
} from "../controllers/answer.controllers.js";

const router = Router();

router.get("/answers", getAnswers);
router.get("/answers/:id", getAnswer);
router.post("/answer", postAnswer);
router.put("/answers/:id", updateAnswer);
router.delete("/answers/:id", deleteAnswer);

export default router;
