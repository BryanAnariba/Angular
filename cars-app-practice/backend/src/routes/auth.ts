import { Router } from "express";
import { AuthController } from "../controller/Auth";
import { checkJwt } from "../middlewares";

const router: Router = Router();

router
  .post('/new-account', AuthController.newAccount)
  .post('/sign-in', AuthController.signIn)
  .get('/check-token', [ checkJwt ], AuthController.refreshToken);

export {router};