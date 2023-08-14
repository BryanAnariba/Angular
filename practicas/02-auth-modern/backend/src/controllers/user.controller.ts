import { Response, Request } from "express";
import { handleHttp } from "../utils/handle.http";
import { createUser, getUserByEmail } from "../services/user.service";
import { comparePasswords, genHashedPassword } from "../utils/bcrypt.handle.";
import { getRole } from "../services/role.service";
import { generateToken } from "../utils/jwt.handle";

let statusCode = 0;

export const login = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        const { email, password } = req.body;

        // Validaciones basicas, mejorar si queda tiempo
        if ( 
            !email || email.trim().length < 3 ||
            !password || password.trim().length < 3
        ) {
            statusCode = 404;
            throw new Error( `Required Fields: Email, Password` );
        }

        // Verificar existencia de usuario
        const existUser = await getUserByEmail( email );
        if ( !existUser ) {
            statusCode = 401
            throw new Error( `Email ${ email } does not exists` ) ;
        }

        const isMatchedPassword = await comparePasswords( password, existUser.password );

        if ( !isMatchedPassword ) {
            statusCode = 401;
            throw new Error( `Incorrect Password` );
        }

        statusCode = 200;
        return handleHttp( res, statusCode, 'Register-Success', { token: await generateToken( existUser ) });
    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, 'HTTP_LOGIN_AUTHENTICATION_ERROR', error.message );
    }
}

export const register = async ( req: Request, res: Response ): Promise<Response> => {
    try {
        const { firstName, lastName, userName, email, password, profileImage, role } = req.body;

        // Validaciones basicas, mejorar si queda tiempo
        if ( 
            !firstName || firstName.trim().length < 3 ||
            !lastName || lastName.trim().length < 3 ||
            !userName || userName.trim().length < 3 ||
            !email || email.trim().length < 3 ||
            !password || password.trim().length < 3 ||
            !role
        ) {
            statusCode = 404;
            throw new Error( `Required Fields: First Name, Last Name, User Name, Email, Password, Role` );
        }

        // Verificar existencia de usuario
        const existUser = await getUserByEmail( email );
        if ( existUser ) {
            statusCode = 404;
            throw new Error( `Email ${ email } already exists` ) ;
        }

        // Verificar role
        const exitsRole = await getRole( role );
        if ( !exitsRole ) {
            statusCode = 404;
            throw new Error( `The role does not exists` );
        }

        const hashedPassword = await  genHashedPassword(password);
        const jsonResponse = await createUser({ firstName, lastName, userName, email, password: hashedPassword, profileImage, role });

        statusCode = 200;
        return handleHttp( res, statusCode, 'Register-Success', jsonResponse );
    } catch ( error: any ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, 'HTTP_REGISTER_AUTHENTICATION_ERROR', error.message );
    }
}