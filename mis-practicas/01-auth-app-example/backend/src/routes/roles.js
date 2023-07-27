import { Router } from "express";
import { createItem, deleteItem, getItems, updateItem } from "../controllers/Role.js";

const router = Router();

router.get( '', getItems );

router.post( '', createItem );

router.put( '/:roleId', updateItem );

router.delete( '/:roleId', deleteItem );

export { router };