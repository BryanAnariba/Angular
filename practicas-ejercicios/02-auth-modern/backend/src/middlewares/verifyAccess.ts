import { NextFunction, Response } from 'express';
import { handleHttp } from '../utils/handle.http';
import { verifyToken } from '../utils/jwt.handle';
import { requestExtend } from '../interfaces/requestExtend';

export const verifyAccess = ( req: requestExtend, res: Response, next: NextFunction ) => {
    const token: string = req.cookies?.access_token;

    if ( !token || token.trim() === '' ) {
        return handleHttp( res, 401, 'HTTP_UNAUTHORIZED_ERROR', 'Token does not provided' );
    }

    try {
        const isValidToken = verifyToken( token );
        if ( !isValidToken ) {
            throw new Error('Invalid Token');
        }

        //console.log({ isValidToken });
        req.loggedUser = isValidToken;
        next();
        
    } catch ( error: any ) {
        return handleHttp( res, 401, 'HTTP_UNAUTHORIZED_ERROR', error.message );
    }
}