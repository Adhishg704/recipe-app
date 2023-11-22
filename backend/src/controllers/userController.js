import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/token-generator.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users: users });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
}

export const userSignUp = async (req, res, next) => {
    try {
        const { name, email, password, rePassword } = req.body;
        if (password !== rePassword) {
            return res.status(401).json({errors: [{msg: "Passwords do not match"}]});
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(401).json({errors: [{msg: "User already registered"}]});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const user = new User({
            name: name,
            email: email,
            password: hashedPassword
        })
        await user.save();
        return res.status(200).json({ message: "OK", user: user._id.toString() });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
}

export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({errors: [{msg: "User not registered"}]});
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({errors: [{msg: "Incorrect password"}]});
        }

        const token = generateToken(user._id.toString(), user.email, "7d");

        return res.status(200).json({ message: "OK", user: user._id.toString(), token: token});
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
}

export const getUsername = async (req, res, next) => {
    try {
        const {id} = req.body;
        const user = await User.findById(id);
        return res.status(200).json({user: user});
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
}

export const updatePassword = async (req, res, next) => {
    try {
        const {email, password, rePassword} = req.body;
        const existingUser = await User.findOne({email: email});
        if(!existingUser) {
            return res.status(401).json({errors: [{msg: "User not registered"}]});
        }
        if(password !== rePassword) {
            return res.status(401).json({errors: [{msg: "Passwords do not match"}]});
        }
        const hashedPassword = await bcryptjs.hash(password, 10);
        const updatedUser = await User.findOneAndUpdate(
            {email: email},
            {$set: {password: hashedPassword}},
            {new: true}
        );
        if(!updatedUser) {
            return res.status(500).json({message: "Error updating password"});
        }
        return res.status(200).json({message: "OK", newPassword: updatedUser.password});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "ERROR", cause: error.message});
    }
}

export const updateUsername = async (req, res, next) => {
    try {
        const {id, newUsername} = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            {_id: id},
            {$set: {name: newUsername}},
            {new: true}
        );
        if(!updatedUser) {
            return res.status(500).json({message: "Error updating username", id: id, newUsername: newUsername});
        }
        return res.status(200).json({message: "OK", newUsername: updatedUser.name});
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "ERROR", cause: error.message});
    }
}