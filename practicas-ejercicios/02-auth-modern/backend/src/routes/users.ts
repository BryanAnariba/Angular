import { Router } from "express";
import { getItem, getItems } from "../controllers/user.controller";
import { verifyAccess } from "../middlewares/verifyAccess";
import { verifyRole } from "../utils/role.handle";
import { Role } from "../enums/Role.enum";

const router = Router();

router.get( 
    '', 
    [
        verifyAccess,
        verifyRole([ Role.ADMIN, Role.USER ]),
    ],
    getItems 
);
router.get( 
    '/:userId', 
    [
        verifyAccess,
        verifyRole([ Role.ADMIN ]),
    ],
    getItem
);

export {
    router,
}