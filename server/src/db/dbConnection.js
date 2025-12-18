import {Pool} from "pg"
import { config } from "../config/appConfig.js"


export const pool =new Pool({
    connectionString : config.db_url,
    ssl : {
        rejectUnauthorized : false
    }
})