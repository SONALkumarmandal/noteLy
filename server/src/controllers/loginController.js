import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db/dbConnection.js";
import { respond } from "../utils/response.js";
import { config } from "../config/appConfig.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT id, name, email, password FROM "users" WHERE email=$1`,
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      config.jwt_token,
      { expiresIn: "7d" }
    );

    respond(res, 200, {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    next(err);
  }
};
