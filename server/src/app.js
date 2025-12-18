import express from "express"
import cors from "cors"
import notesFeatures from "./routes/notesRoutes.js"
import authFeatures from "./routes/authRoutes.js"
import { loggerMiddleware } from "./middlewares/loggerMiddleware.js"
import { errMiddleware } from "./middlewares/errMiddleware.js"

const expectedCors = {
    origin : "https://notely-1-96gg.onrender.com",
    methods : ["GET" ,"POST" , "PUT" ,"PATCH", "DELETE"],
    allowedHeaders : ['Content-Type','Authorization'],
    credentials :true
}

export const createApp = ()=>{
    const app=express()
    app.use(cors(expectedCors))
    app.use(express.json())
    app.use(loggerMiddleware)

    app.use("/auth",authFeatures)
    app.use("/notes",notesFeatures)

    app.use(errMiddleware)
    return app
}

