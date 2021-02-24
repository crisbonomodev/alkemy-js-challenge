const {Router} = require('express');
const router = Router();
const authController = require('../controllers/authController');

router.post('/signin',authController.signIn);

module.exports = router;