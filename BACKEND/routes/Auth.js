import express from "express"
import { getCurrentUser, askToAssistant,updateAssistant } from "../Controllers/user.controller.js"
import isAuth from "../middleware/Auth.js"
import upload from "../middleware/multer.js"


const userRouter=express.Router()

userRouter.post("/user",isAuth,getCurrentUser)
userRouter.post("/",isAuth,upload.single("assistantImage"),updateAssistant)


userRouter.post("/ask",askToAssistant)
export default userRouter;
