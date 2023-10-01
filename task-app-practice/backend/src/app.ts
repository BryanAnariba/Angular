import 'dotenv/config';
import { Server } from "./Server";

const main = async () => {
  const server = new Server({port: process.env.PORT || 3500});
  await server.start();
}

(() => {
  main();
})()