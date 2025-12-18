import { createApp } from "./app.js";
import { config } from "./config/appConfig.js";
import { pool } from "./db/dbConnection.js";

const app=createApp()

const start = async ()=>{
    try {
        await pool.query("SELECT 1");
        console.log("🟢 Postgresql Connected ✅")
        app.listen(config.PORT,()=>{
            console.log(`server started at port : ${config.PORT}`)
        })
    } catch (error) {
        console.log("startiup Error!",error)
        process.exit(1)
    }
}

start();