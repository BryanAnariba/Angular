import { Router } from "express";
import { CarController } from "../controller";
import { logMiddleware } from "../middlewares/log.middleware";

const router: Router = Router();

router
  .get('' ,CarController.getItems)
  .get('/:cardId', CarController.getItem)
  .post('', CarController.postItem)
  .put('/:cardId', CarController.putItem)
  .delete('/:cardId', CarController.deletetItem);

export {router};