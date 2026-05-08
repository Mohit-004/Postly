import {Router} from "express"
import { registerUser } from "../controllers/user.controllers.js"

const userRouter = Router()

userRouter.route("/register").post(registerUser)
// router.route("/login").post(loginUser)

export default userRouter