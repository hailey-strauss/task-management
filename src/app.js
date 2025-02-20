import express from "express";
import cors from "cors"; //Enable cross origin resource sharing
import morgan from "morgan"; //Logging
import taskRouter from "../src/routes/taskRoutes.js";
//

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/tasks", taskRouter);
export default app;
