import dotenv from "dotenv"

dotenv.config()


export const config={
    PORT:process.env.PORT || 3000,
    env:process.env.env || "dev",
    version : process.env.version || "V1",
    db_url : process.env.DATABASE_URL,
    jwt_token : process.env.JWT_SECRET
}

