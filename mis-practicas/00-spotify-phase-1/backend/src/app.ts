import 'dotenv/config';
import { Server } from './Server';

const main = async (): Promise<void> => {
    const server = new Server();
    await server.startServer();
}

main();