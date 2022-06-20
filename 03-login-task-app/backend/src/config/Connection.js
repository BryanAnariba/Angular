const mongoose = require( 'mongoose' );

class Connection {
    connectToDataBase = () => {
        mongoose.connect( `${ process.env.MONGODB }` )
        .then(( connection ) => {
            console.log(`MongoDB Connected`);
            console.log( `============================` )
        })
        .catch(( error ) => {
            throw new Error( `MongoDB Connection was failed: ${ error }` );
        })
    }
}

module.exports = {
    Connection,
}