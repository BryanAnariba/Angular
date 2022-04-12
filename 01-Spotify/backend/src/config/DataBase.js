const { connect } = require( 'mongoose' );

class DataBase {
    connectMe () {
        connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(( success ) => {
            console.log( `MongoDB is Connected.`.green );
            console.log( `============================`.gray );
        })
        .catch(( err ) => {
            throw new Error(`Error: ${ err }`);
        })
    }
}

module.exports = {
    Connection: DataBase,
};