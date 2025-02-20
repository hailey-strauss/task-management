import express from "express";
// controller
import { getTask, createTask } from "../controllers/taskControllers.js";
const taskRouter = express.Router();

taskRouter.get("/", getTask); // LIST of all tasks
taskRouter.post("/", createTask); // CREATE a new task

export default taskRouter;
