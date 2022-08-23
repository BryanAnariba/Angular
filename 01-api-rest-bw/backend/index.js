import dotenv from 'dotenv';
import { Server } from "./Server.js"

const main = () => {
    dotenv.config();
    const server = new Server();
    server.startServer();
}

main();