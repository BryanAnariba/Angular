import { response, request } from "express";
import { handleHttp } from "../utils/http.handle.js";
import { createUser, findUserByEmail, findUserByUserName } from "../services/user.service.js";
import { encryptPassword, verifyPassword } from "../utils/bcrypt.handle.js";
import { createToken } from "../utils/jwt.handle.js";

let statusCode = 0;

export const signUp = async ( req = request, res = response ) => {
    try {

        // Validaciones basicas
        if ( !req.body.firstName || !req.body.lastName || !req.body.userName || !req.body.email || !req.body.password || !req.body.role ) {
            statusCode = 400;
            throw new Error(`Required fields: First Name, Last Name, User Name, Email, Password, Role`);
        }
        const { firstName, lastName, userName, email, password, role } = req.body;
        if ( firstName.trim() === '' || lastName.trim() === '' || userName.trim() === '' || email.trim() === '' || password.trim() === '' || role.trim() === '' ) {
            statusCode = 400;
            throw new Error(`Some empty field: First Name, Last Name, User Name, Email, Password, Role`);
        }

        // Buscamos existencia de email
        const existsEmail = await findUserByEmail( email );
        if ( existsEmail ) {
            statusCode = 400;
            throw new Error(`The email ${ email } already exists`);
        }

        // Buscamos existencia de usuario
        const existsUserName = await findUserByUserName( userName );
        if (existsUserName) {
            statusCode = 400;
            throw new Error(`The User Name ${ userName } already exists`);
        }

        const hashedPassword = await encryptPassword( password );
        const user = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: hashedPassword,
            role: role
        };

        const dataBaseResponse = await createUser( user );
        statusCode = 201;
        return handleHttp( res, statusCode, dataBaseResponse )
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, error.message );
    }
}

export const signIn = async ( req = request, res = response ) => {
    try {
            // Validaciones basicas
            if ( !req.body.email || !req.body.password ) {
                statusCode = 400;
                throw new Error(`Required fields: Email, Password`);
            }
            const { email, password } = req.body;
            if ( email.trim() === '' || password.trim() === '' ) {
                statusCode = 400;
                throw new Error(`Some empty field: Email, Password`);
            }

            // Buscamos existencia de email
            const existsEmail = await findUserByEmail( email );
            if ( !existsEmail ) {
                statusCode = 400;
                throw new Error(`The email ${ email } does not exists`);
            }

            // Si llego aqui comparar las claves
            const isMatchPwd = await verifyPassword( password, existsEmail.password );
            if ( !isMatchPwd ) {
                statusCode = 400;
                throw new Error( `Incorrect password` );
            }
            statusCode = 200;
            const token = createToken(existsEmail._id, existsEmail.isAdmin, existsEmail.role);
            res.cookie('access_token', token, { httpOnly: true });
            return handleHttp( res, statusCode, { user: existsEmail, token: token } );
    } catch ( error ) {
        statusCode = ( statusCode !== 0 ) ? statusCode : 500;
        return handleHttp( res, statusCode, error.message );
    }
}
