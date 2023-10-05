import { Router } from "express";
import { CarController } from "../controller";
import { checkJwt, multerMiddleware } from "../middlewares";

const router: Router = Router();
/*
  TODO: private routes, when the user has logged
*/
router
  .get('' ,[checkJwt] , CarController.getItems)
  .get('/:cardId', [checkJwt], CarController.getItem)
  .post('', [checkJwt, multerMiddleware.single('image')], CarController.postItem)
  .put('/:cardId', [checkJwt], CarController.putItem)
  .delete('/:cardId', [checkJwt], CarController.deletetItem);

export {router};