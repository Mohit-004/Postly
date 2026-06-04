import { User } from "../models/user.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"

const getUsers = asyncHandler( async(req, res) => {
    try {
        const users = await User.find()
            .select("-password -refreshToken")

        return res.status(200).json({
            success:  true,
            count: users.length,
            users
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
})

export {getUsers};