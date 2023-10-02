import { Router } from "express";
import { AuthController } from "../controller/Auth";

const router: Router = Router();

router
  .post('/new-account', AuthController.newAccount)
  .post('/sign-in', AuthController.signIn);

export {router};