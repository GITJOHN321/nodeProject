import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import questionRoutes from "./routes/question.routes.js";
import answerRoutes from "./routes/answer.routes.js";
import authRoutes from "./routes/auth.routes.js"
const app = express();

app.use(express.json());
app.use(questionRoutes);
app.use(answerRoutes);
app.use(authRoutes)
app.use(indexRoutes);
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
