import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db/dbConnection.js";
import { respond } from "../utils/response.js";

export const signUp = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // hash password
    const hashedPass = await bcrypt.hash(password, 10);

    // INSERT + RETURNING
    const result = await pool.query(
      `INSERT INTO "users" (name, email, password)
       VALUES ($1, $2, $3)
       RETURNING id, name, email`,
      [name, email, hashedPass]
    );

    const user = result.rows[0];

    // generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // send token + user
    respond(res, 201, {
      token,
      user,
    });
  } catch (error) {
    console.error("Signup error:", error);
    next(error);
  }
};
