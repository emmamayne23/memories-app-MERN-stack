import { 
    getAllPosts, 
    getPost, 
    createPost, 
    updatePost, 
    deletePost,
    likePost,
  } from "../controllers/post.controller.js";
  
  import express from "express";
  import upload from "../middlewares/multer.js";
  
  const router = express.Router();
  
  // Routes
  router.get("/", getAllPosts);
  router.get("/:id", getPost);

  // adding the multer middleware to handle file uploads
  router.post("/", upload.single("selectedFile"), createPost);
  router.put("/:id", upload.single("selectedFile"), updatePost);

  router.delete("/:id", deletePost);
  router.patch("/:id/likePost", likePost)
  
  export default router;
  