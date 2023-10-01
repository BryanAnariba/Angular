import { Router } from "express";
import { CarController } from "../controller";

const router: Router = Router();

router
  .get('', CarController.getItems)
  .get('/:cardId', CarController.getItem)
  .post('', CarController.postItem)
  .put('/:cardId', CarController.getItem)
  .delete('/:cardId', CarController.getItem);

export {router};