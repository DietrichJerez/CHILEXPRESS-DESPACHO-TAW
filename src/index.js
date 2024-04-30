import express from "express"
import morgan from "morgan"
import { configDotenv } from "dotenv"
import despachoRouter from "./router/despacho.route.js"



const app = express()


app.use(express.json());
app.use(morgan("dev"))
app.use("/Chilexpress", despachoRouter)


app.listen(3000)
console.log("servidor online", 3000)
