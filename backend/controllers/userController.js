import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// descprition Auth user/ set token
// route POST /api/users.auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = await User.findOne({
        email
    });

    if (user && (await user.matchPassword(password))) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(401);
        throw new Error(' Invalid email or password');
    }
    res.status(200).json({
        message: 'Auth User'
    });
});

// descprition register new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const {
        name,
        email,
        password
    } = req.body;

    const userExists = await User.findOne({ // matches the email 
        email
    });

    if (userExists) {
        res.status(400)
        throw new Error('user already exists !!!');
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if (user) {
        generateToken(res, user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400);
        throw new Error(' Invalid user data');
    }

});

// descprition Logout user
// route POST /api/users/logout
// @access Public
const LogOutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })
    res.status(200).json({
        message: 'Loged Out User'
    });
});
// descprition get user frofile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: ' User profile '
    });
});

// descprition update user frofile
// route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: ' Update User profile '
    });
});
export {
    authUser,
    registerUser,
    LogOutUser,
    getUserProfile,
    updateUserProfile
};