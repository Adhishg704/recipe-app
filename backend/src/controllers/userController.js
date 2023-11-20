import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { generateToken } from "../utils/token-generator.js";
import { COOKIE_NAME } from "../utils/constants.js";

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
            return res.status(400).send("Passwords do not match");
        }
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send("User already registered");
        }
        const hashedPassword = await hash(password, 10);
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
            return res.status(400).send("User is not registered");
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).send("Incorrect password");
        }

        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true
        });

        const token = generateToken(user._id.toString(), user.email, "7d");
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);

        res.cookie(COOKIE_NAME, token, {
            path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true
        });

        return res.status(200).json({ message: "OK", user: user._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "ERROR", cause: error.message });
    }
}