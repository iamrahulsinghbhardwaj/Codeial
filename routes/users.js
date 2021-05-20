const express=require('express');
const router=express.Router();
const passport=require('passport');

const usercontroller=require('../controllers/user_controller'); 

router.get('/profile/:id',passport.checkAuthentication,usercontroller.profile);

// router.get('/profile',usercontroller.profile);

router.get('/sign-up',usercontroller.signUp);
router.get('/sign-in',usercontroller.signIn);


router.post('/create',usercontroller.create);
//router.post('/create-session',usercontroller.createSession);

//use passport as middleware to autenticate
router.post('/create-session',passport.authenticate(
    'local',
    {failureRedirect:'/users/sign-in'},
),usercontroller.createSession);


router.get('/sign-out',usercontroller.destroySession);
module.exports=router;