const mongoose = require('mongoose');


const DBServer = process.env.DB_PORT || 'localhost:27017';
const DBName = process.env.DB_NAME || 'SpotifyDB';
class DataBase {

    ConnectDB () {
        mongoose.connect(`mongodb://${ DBServer }/${ DBName }`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(( success ) => {
            console.log( 'MongoDB is connected successfully' );
        })
        .catch(( error ) => {
            console.log('MongoDB Connection Failed, ', error)
        });
    }
}

module.exports = { DataBase, };