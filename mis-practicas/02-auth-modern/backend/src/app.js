import { Server } from "./Server.js"

const main = async () => {
    const server = new Server();
    await server.startApp();
}

main();