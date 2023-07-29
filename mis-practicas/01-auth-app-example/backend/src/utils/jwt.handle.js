import jwt from 'jsonwebtoken';

const createToken = ( uid, isAdmin, role ) => {
    return  jwt.sign( { uid: uid, isAdmin: isAdmin, role: role }, `${ process.env.SECRET_KEY }`, { expiresIn: '1h' } );
}

const isValidToken = async () => {

}

export {
    createToken, isValidToken,
}