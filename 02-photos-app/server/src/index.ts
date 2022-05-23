import { DataBase } from "./config/DataBase";
import { Server } from "./Server"

const main = async () => {
    const server = new Server();
    const db = new DataBase();
    await server.start();
    await db.startConnection();
}

main();