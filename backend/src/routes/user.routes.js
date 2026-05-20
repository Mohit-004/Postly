import {Router} from "express"
import { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentPassword, getCurrentUser, updateAccount, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory,  } from "../controllers/user.controllers.js"
import {upload} from "../middlewares/multer.middleware.js"
import { varifyJwt } from "../middlewares/auth.middleware.js"
import { verify } from "jsonwebtoken"



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
userRouter.route("/login").post(loginUser)

userRouter.route("/logout").post(varifyJwt,logoutUser)

userRouter.route("/refresh-token").post(refreshAccessToken)

userRouter.route("/change-password").post(varifyJwt, changeCurrentPassword)

userRouter.route("/current-user").get(varifyJwt, getCurrentUser)

userRouter.route("/update-account").patch(varifyJwt, updateAccount)

userRouter.route("/avatar").patch(varifyJwt,upload.single("avatar") ,updateUserAvatar)

userRouter.route("/cover-image").patch(varifyJwt,upload.single("coverImage") ,updateUserCoverImage)

userRouter.route("/c/:username").get(varifyJwt, getUserChannelProfile)

userRouter.route("/watch-history").get(varifyJwt, getWatchHistory)







export default userRouter