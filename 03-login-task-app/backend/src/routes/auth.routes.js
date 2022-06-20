const { Router } = require( 'express' );
const { AuthController } = require('../controllers/AuthControllers');

const router = Router();
const authController = new AuthController();

router.post( '/register', authController.registerUser );

router.post( '/login', authController.logInUser );

module.exports = {
    AuthRoutes: router,
}