import { Router } from "express";
import { signUp } from "../controllers/signupController.js";
import { login } from "../controllers/loginController.js";

const router=Router()
router.post("/signup",signUp)
router.post("/login",login)

export default router