import express from "express"
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controller/todoController"
const userRouter = express.Router()

userRouter.post("/create", createTodo)
userRouter.get("/get", getTodo)
userRouter.patch("/updateTodo/:id", updateTodo)
userRouter.delete("/delete/:id", deleteTodo)

export default userRouter