import express from "express"
import dotenv from "dotenv"
import dbConnect  from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './.env'
})



dbConnect()
.then(
    app.listen(process.env.PORT , () => {
        console.log("server is running");
    })
)
.catch((err) => {
    console.log("mongoDb connection failed !!" , err);
})

