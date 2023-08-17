import { Router } from 'express';
import { createItem, deleteItem, getItem, getItems, updateItem } from '../controllers/roles.controller';
import { verifyAccess } from '../middlewares/verifyAccess';
import { verifyRole } from '../utils/role.handle';
import { Role } from '../enums/Role.enum';

const router = Router();

// Solo admins
router.get( 
    '', 
    [
        verifyAccess,
        verifyRole([Role.ADMIN])
    ],
    getItems 
);
router.get( 
    '/:roleId', 
    [
        verifyAccess,
        verifyRole([Role.ADMIN])
    ],
    getItem 
);
router.post( 
    '',
    [
        verifyAccess,
        verifyRole([Role.ADMIN])
    ],
    createItem 
);
router.put( 
    '/:roleId',
    [
        verifyAccess,
        verifyRole([Role.ADMIN])
    ], 
    updateItem 
);
router.delete( 
    '/:roleId',
    [
        verifyAccess,
        verifyRole([Role.ADMIN])
    ], 
    deleteItem 
);

export {
    router,
}