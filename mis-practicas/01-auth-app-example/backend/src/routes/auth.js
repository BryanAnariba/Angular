import { Router } from "express";
import { signIn, signUp } from "../controllers/User.js";

const router = Router();

router.post( '/signin', signIn );
router.post( '/signup', signUp );

export { router };