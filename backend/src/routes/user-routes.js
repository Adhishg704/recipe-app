import { Router } from "express";
import { getAllUsers, getUsername, updatePassword, updateUsername, userLogin, userSignUp } from "../controllers/userController.js";
import { changePasswordValidator, loginValidator, signupValidator, validate } from "../utils/validators.js";

const userRouter = Router();

userRouter.get("/",  getAllUsers);
userRouter.post("/signup/", validate(signupValidator), userSignUp);
userRouter.post("/login/", validate(loginValidator) ,userLogin);
userRouter.post("/getName/", getUsername);
userRouter.post("/updatePassword", validate(changePasswordValidator) ,updatePassword);
userRouter.post("/updateUsername", updateUsername);

export default userRouter;