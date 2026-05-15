import {Router} from "express"
import { registerUser, loginUser, logoutUser,  } from "../controllers/user.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import { varifyJwt } from "../middlewares/auth.middleware.js"



const userRouter = Router()

userRouter.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser
)
router.route("/login").post(loginUser)

router.route("/logout").post(varifyJwt,logoutUser)

export default userRouter