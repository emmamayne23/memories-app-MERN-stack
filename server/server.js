import express from "express"
import cors from "cors"
import path from "path"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import postsRoute from "./routes/post.route.js"
import usersRoute from "./routes/user.route.js"

dotenv.config()

const PORT = process.env.PORT || 3030

const app = express()

// midllewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// // serve static files (uploaded images)
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")))

// api routes
app.use("/posts", postsRoute)
app.use("/users", usersRoute)

// base route
app.get("/", (req, res) => {
    res.json("Server is active")
})


app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on port: ${PORT}`)
})