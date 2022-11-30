"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoController_1 = require("../controller/todoController");
const userRouter = express_1.default.Router();
userRouter.post("/create", todoController_1.createTodo);
userRouter.get("/get", todoController_1.getTodo);
userRouter.patch("/updateTodo/:id", todoController_1.updateTodo);
userRouter.delete("/delete/:id", todoController_1.deleteTodo);
exports.default = userRouter;
