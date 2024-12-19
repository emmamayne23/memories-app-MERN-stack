import User from "../models/user.model.js"
import mongoose from "mongoose"

import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import dotenv from "dotenv"

dotenv.config()


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({message: "Fetched all users", data: users})
    } catch (error) {
        console.error("Error fetching users", error.message)
        res.status(500).json({message: "Server Error"})
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({message: "Could not find user with this ID"})
    }
    try {
        const user = await User.findById(id)
        res.status(200).json({message: "Successfully fetched User", data: user})
    } catch (error) {
        console.error("Error fetching user", error.message)
        res.status(500).json({message: "Server Error"})
    }
}

export const createUser = async (req, res) => {
    const user = req.body
    if (!user.name || !user.email || !user.password) {
        return res.status(400).json({message: "Please fill required fields"})
    }

    const hashedPassword = await bcrypt.hash(user.password, 14)
    const newUser = new User({ ...user, password: hashedPassword })
    try {
        await newUser.save()
        res.status(201).json({message: "User created successfully", user: newUser})
    } catch (error) {
        console.error("Error creating user", error.message)
        res.status(500).json({message: "Server Error"})
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" })
    }
    try {
        const user = await User.findOne({ email: email })
        if(!user) {
            return res.status(404).json({ message: "Could not find User" })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) {
            res.status(401).json({ message: "Incorrect Password" })
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY , {
            expiresIn: "1h"
        })
        res.status(200).json({ message: "Login successfull", token, user: { name: user.name, email: user.email } })
    } catch (error) {
        console.error("Error loging in user: ", error.message)
        res.status(500).json({message: "Server Error"})
    }
}