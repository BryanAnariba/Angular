const { Connection } = require('./config/Connection');
const { Server } = require('./Server');

require( 'dotenv' ).config();

const main = () => {
    console.clear();
    const server = new Server();
    server.start();
    const db = new Connection();
    db.connectToDataBase();
}

main();
