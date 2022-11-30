import express from "express"
import logger from "morgan"
import userRouter from "./routes/todoRoute"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const app = express()

mongoose.connect(process.env.DATABASE_URL!, () => {
    console.log("database connected successfully")
})

app.use(express.json())
app.use(logger("dev"))

app.use("/todo", userRouter)

const port = 3445

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`)
})