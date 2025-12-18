import { pool } from "../db/dbConnection.js"
import { respond } from "../utils/response.js"

export const createNote = async (req, res, next) => {
  const { title, content } = req.body;
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `INSERT INTO notes (user_id, title, content)
       VALUES ($1, $2, $3)
       RETURNING id, title, content, created_at`,
      [user_id, title, content]
    );

    respond(res, 201, result.rows[0]);
  } catch (error) {
    next(error);
  }
};


export const getAllNotes = async (req, res, next) => {
  try {
    const userId = req.user.id; 

    const responseData = await pool.query(
      `SELECT id, title, content, created_at
       FROM notes
       WHERE user_id = $1`,
      [userId]
    );

    return respond(res, 200, responseData.rows);
  } catch (error) {
    next(error);
  }
};


export const updateNote = async (req, res, next) => {
  const { id } = req.params            
  const { title, content } = req.body
  const userId = req.user.id            

  try {
    const result = await pool.query(
      `
      UPDATE notes
      SET title = $1, content = $2
      WHERE id = $3 AND user_id = $4
      RETURNING id, title, content, created_at
      `,
      [title, content, id, userId]
    )

    if (result.rowCount === 0) {
      return respond(res, 404, "Note not found or not authorized")
    }

    return respond(res, 200, result.rows[0])

  } catch (error) {
    console.error("Update Error:", error)
    next(error)
  }
}

export const deleteNote = async (req, res, next) => {
  const { id } = req.params
  const userId = req.user.id

  try {
    const result = await pool.query(
      `
      DELETE FROM notes
      WHERE id = $1 AND user_id = $2
      RETURNING id
      `,
      [id, userId]
    )

    if (result.rowCount === 0) {
      return respond(res, 404, "Note not found or not authorized")
    }

    return respond(res, 200, "Note deleted successfully")

  } catch (error) {
    console.error("Delete Error:", error)
    next(error)
  }
}
