const { request, response } = require( 'express' );
const bcryptjs = require('bcryptjs');
const jwt = require( 'jsonwebtoken' );

const User = require('../models/User');

class AuthController {

    registerUser = async ( req = request, res = response ) => {
        const { email, password } = req.body;
        try {

            // Verify if user exists
            const emailExist = await User.findOne({ email: email });
            if ( emailExist ) throw new Error( `Email ${ email } already exists` );

            // Hashing Password
            const salt = await bcryptjs.genSalt( 10 );
            const hashedPassword = await bcryptjs.hash( password, salt );
            const user = new User({
                email: email,
                password: hashedPassword
            });

            // Save data
            const saved = await user.save();

            // Generate token
            const token = jwt.sign( { _id: user._id }, process.env.SECRETKEY, { expiresIn: '1h' } );

            // Return user data
            return res.status( 201 ).json( { status: 201, data: {
                email: saved.email,
                token: token
            }});

        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }   
    }

    logInUser = async ( req = request, res = response ) => {
        const { email, password } = req.body;
        try {

            const emailExist = await User.findOne( { email: email } );

            // If email is not exists en database
            if ( !emailExist ) throw new Error( `Email ${ email } does not exists.` );

            // Verify password
            const isCorrectPassword = await bcryptjs.compare( password, emailExist.password );
            if ( !isCorrectPassword ) throw new Error( `Incorrect Password.` );

            // Generate token
            const token = jwt.sign( { _id: emailExist._id }, process.env.SECRETKEY, { expiresIn: '1h' } );

            // Return user data
            return res.status( 200 ).json( { status: 200, data: {
                email: emailExist.email,
                token: token
            }});

        } catch ( error ) {
            return res.status( 400 ).json( { status: 400, data: error.message } );
        }
    }
}

module.exports = {
    AuthController,
}