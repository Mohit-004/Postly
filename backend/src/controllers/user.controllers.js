import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/apiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/apiResponse.js"

const registerUser = asyncHandler(async (req, res) => {
    //Gett user details from frontend

    //Validation - not empty

    //check if user already exists: using username and email

    //Check for images, chek for avatar

    //Upload them to clodinary, avatar
     
    //Create user object - create entry in db

    //remove password and refresh token field from response

    //check for user creation 

    //return response


    const {username, fullname , email, password} = req.body 
    console.log("Username :",username);

    // if(fullname === ""){
    //     throw new ApiError(400, "Fullname is required")
    // }

    if(
        [fullname, email, password, username].some((field) => 
            filed?.trim() == ""

        )

    ){
        throw new ApiError(400, "All fields are required")

    }

    const exitedUser = User.findOne({
        $or: [{ username }, { email }]
    })

    if(exitedUser){
        throw new ApiError(409, "User with email or username is already exists")
    }

    const avatarLocalPath = req.files?.avatar[0]?.path
    console.log(req.files)

    const coverImageLocalPath = req.files?.coverImage[0]?.path
    

    if(!avatarLocalPath){
    throw new ApiError(400, "Avart file is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
    throw new ApiError(400, "Avart file is required")
    }

    const user = await User.create({
        username: username.toLowerCase(),
        fullname,
        avatar: avatar.url,
        coverImage: coverImage?.url || "",
        email,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "Something went worng while registring a user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User Registered Successfully...!")
    )

})

export  {registerUser}