import express from 'express';
import { authUser,
    registerUser,
    LogOutUser,
    getUserProfile,
    updateUserProfile} from "../controllers/userController.js";
import  { protect } from '../middleware/authMiddleware.js';
    
    const router = express.Router();
// console.log(authUser)

router.route('/').post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(LogOutUser);
router.route('/profile').get(protect,getUserProfile).put(protect, updateUserProfile);

export default router;