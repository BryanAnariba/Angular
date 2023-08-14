import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/roles.controller';

const router = Router();

router.get( '', getItems );
router.get( '/:roleId', getItem );
router.post( '', createItem );
router.put( '/:roleId', updateItem );
router.delete( '/:roleId', deleteItem );

export {
    router,
}