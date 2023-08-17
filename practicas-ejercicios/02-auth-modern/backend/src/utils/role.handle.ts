import { NextFunction, Response } from "express";
import { Role } from "../enums/Role.enum";
import { requestExtend } from "../interfaces/requestExtend";
import { handleHttp } from "./handle.http";

export const verifyRole = ( roles: Role[] ) => {
    return function ( req: requestExtend, res: Response, next: NextFunction ) {
        //console.log({ roles: roles, userLogged: req.loggedUser?.role.roleName });
        //console.log('IS MATCHED: ' + roles.some( role => (role === req.loggedUser?.role.roleName)));
        if (!roles.some( role => (role === req.loggedUser?.role.roleName))) {
            return handleHttp( res, 401, 'HTTP_UNAUTHORIZED_ERROR', 'You do not have permisions for this action.' )
        }
        next();
    }
}