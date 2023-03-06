const {Router}= require('express');
const{check}=require('express-validator');
const { signup, login, updateUser } = require('../controllers/user.controller');
const { validUserByEmail, validPassword, validUser } = require('../middlewares/user.middleware');
const { signupValidations, validateFields, loginValidation, updateUserValidation } = require('../middlewares/validations.middleware');

const router =Router();

router.post('/signup', signupValidations, validateFields, signup);



router.post(
'/login',
loginValidation,
validateFields,
validUserByEmail,
validPassword,
login
);

router.use(protect);
router.patch(
    '/id:',
    updateUserValidation,
    validateFields, 
    validUser,
    protectAccountOwner, 
    updateUser);
  
  module.exports = {
    user : router,
  };


