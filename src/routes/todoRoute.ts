import express from "express"
import { createTodo, getTodo, removeTodo, updateTodo } from "../controller/todoController"
const userRouter = express.Router()

userRouter.post("/create", createTodo)
userRouter.get("/get", getTodo)
userRouter.patch("/updateTodo/:id", updateTodo)
userRouter.delete("/remove-todo/:id", removeTodo)

export default userRouter