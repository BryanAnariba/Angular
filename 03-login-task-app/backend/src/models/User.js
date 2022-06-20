const { Schema, model } = require( 'mongoose' );


const userSchema = new Schema({
    email: {
        type: String,
        required: [ true, 'Email Is Required' ],
        unique: true
    },
    password: {
        type: String,
        required: [ true, 'password Is Required' ]
    }
},{
    timestamps: true,
    versionKey: false
}); 

module.exports = model( 'User', userSchema );