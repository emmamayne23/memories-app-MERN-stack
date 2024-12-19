import PostMessage from "../models/post.model.js";
import mongoose from "mongoose";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await PostMessage.find({})
        res.status(200).json({ status: "success", message: "Posts fetched successfully", data: posts })
    } catch (error) {
        console.error("Error fetching posts", error.message)
        res.status(500).json({ status: "failed", message: "Server Error" })
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post cannot be found" })
    }
    try {
        const post = await PostMessage.findById(id)
        res.status(200).json({ status: "success", message: "Post fetched successfully", data: post })
    } catch (error) {
        console.error("Error fetching post", error.message)
        res.status(500).json({ status: "failed", message: "Server Error" })
    }
}

export const createPost = async (req, res) => {
    const { creator, title, message, tags } = req.body

    // extract the file path
    const filePath = req.file ? req.file.path : ""
    const newPost = new PostMessage({
        title, 
        message, 
        creator, 
        tags: tags.split(","),
        selectedFile: filePath,
    })
    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        console.error("Error creating post", error.message)
        res.status(409).json({ status: "failed", message: error.message })
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params
    const { creator, title, message, tags } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post cannot be found" })
    }
    const filePath = req.file ? req.file.path : req.body.selectedFile
    const updatedPost = {
        title,
        message,
        creator,
        tags: tags.split(","),
        selectedFile: filePath, // Update file if provided
        _id: id,
      };
    try {
        const result = await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true })
        res.status(201).json(result)
    } catch (error) {
        console.error("Could not update post", error.message)
        res.status(500).json({ status: "failed", message: error.message })
    }
}

export const deletePost = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Post cannot be found" })
    }
    try {
        await PostMessage.findByIdAndDelete(id)
        res.status(200).json({ status: "success", message: "Successfully deleted post" })
    } catch (error) {
        console.error("Could not delete post", error.message)
        res.status(500).json({ status: "failed", message: "Server Error" })
    }
}

export const likePost = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No Post with that ID" })
    }
    try {
        const post = await PostMessage.findById(id)
        post.likeCount += 1
        const updatedPost = await post.save()
        res.status(200).json(updatedPost)
    } catch (error) {
        console.error("Could not like post", error.message)
        res.status(500).json({ status: "failed", message: "Server Error" })
    }
}