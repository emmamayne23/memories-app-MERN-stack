import express from "express"
import { getAllUsers, getUser, createUser, loginUser } from "../controllers/user.controller.js"

const router = express.Router()

router.get("/", getAllUsers)

router.get("/:id", getUser)

router.post("/register", createUser)

router.post("/login", loginUser)

export default router
