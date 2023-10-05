

const express = require('express');
const router = express.Router();

const { 
    Register, 
    Login, 
    logOut, 
    updatePassword, 
    updateProfile, 
    deleteProfile, 
    myProfile,
    getUserProfile,
    getAllUsers,
    forgetPassword,
    resetPassword
    } = require('../controllers/User');

// const { isAuthenticated } = require('../middlewares/auth');

router.route('/register').post(Register)

router.route('/login').post(Login);

router.route('/logout').get(logOut);

router.route('/update/password').put( updatePassword);

router.route('/update/profile').put(updateProfile);

router.route('/delete/me').delete( deleteProfile);

router.route('/me').get( myProfile);

router.route('/user/:id').get( getUserProfile);

router.route('/users').get(getAllUsers);

router.route('/forgot/password').post(forgetPassword);

router.route('/password/reset/:token').put(resetPassword);


module.exports = router











































































































































































































































