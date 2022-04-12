require('dotenv').config();
const { DataBase } = require('./modules/DataBase');

const { Server } = require( './Server' );

const main = async () => {
    const server = new Server();
    const db = new DataBase();
    await server.startServer();
    await db.ConnectDB();
}

main();