const { response, request } = require( "express" );
const jwt = require( "jsonwebtoken" );

const verifyToken = ( req = request, res = response, next ) => {    
    try {
        //console.log( req.headers );
        let token = req.headers.authorization;
        if ( !token || token.length === 0 || token === '' ) {
            throw new Error( `The token does not exists in the headers, format token is with bearer` ) 
        }
        
        const isTokenValid = jwt.verify( token.split( ' ' )[1], process.env.SECRETKEY );

        //console.log( isTokenValid );
        req._id = isTokenValid._id;
        next();
    } catch ( error ) {
        const TokenVerificationErrors = {
            'invalid signature': 'The token firm is invalid',
            'jwt expired': 'The token is expired',
            'invalid token': 'The token is not valid',
            'No Bearer': 'You should to use the Format Bearer  to send the token',
            'jwt malformed': 'JWT Invalid token format'
        }
        return res.status( 401 ).json( { status: 401, data: TokenVerificationErrors[ error.message ] } )
    }
}

module.exports = {
    verifyToken
}