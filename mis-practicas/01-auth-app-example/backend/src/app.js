import 'dotenv/config.js';
import { Server } from "./Server.js";

const main = () => {
    const server = new Server();
    server.start();
}

main();