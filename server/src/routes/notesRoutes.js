import { Router } from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router=Router()


router.get("/",authMiddleware,getAllNotes)
router.post("/",authMiddleware,createNote)
router.delete("/delete/:id",authMiddleware,deleteNote)
router.put("/update/:id",authMiddleware,updateNote)

export default router