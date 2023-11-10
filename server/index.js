import express from "express";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import questionRoutes from "./routes/question.routes.js";
import answerRoutes from "./routes/answer.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();

app.use(cors(
    {origin: 'http://localhost:5173'}
))
app.use(express.json());
app.use(cookieParser());

app.use("/api" ,questionRoutes);
app.use(answerRoutes);
app.use("/api/", authRoutes);
app.use(indexRoutes);
app.listen(PORT);
console.log(`Server is running on port ${PORT}`);
