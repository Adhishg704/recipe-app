import { Router } from "express";
import { getAllUsers, getUsername, updatePassword, userLogin, userSignUp } from "../controllers/userController.js";
import { changePasswordValidator, loginValidator, signupValidator, validate } from "../utils/validators.js";

const userRouter = Router();

userRouter.get("/",  getAllUsers);
userRouter.post("/signup/", validate(signupValidator), userSignUp);
userRouter.post("/login/", validate(loginValidator) ,userLogin);
userRouter.post("/getName/", getUsername);
userRouter.post("/updatePassword", validate(changePasswordValidator) ,updatePassword);

export default userRouter;