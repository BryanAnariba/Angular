import { Router } from "express";
import { CarController } from "../controller";
import { checkJwt } from "../middlewares";

const router: Router = Router();
/*
  TODO: private routes, when the user has logged
*/
router
  .get('' ,[checkJwt] , CarController.getItems)
  .get('/:cardId', [], CarController.getItem)
  .post('', [], CarController.postItem)
  .put('/:cardId', [], CarController.putItem)
  .delete('/:cardId', [], CarController.deletetItem);

export {router};