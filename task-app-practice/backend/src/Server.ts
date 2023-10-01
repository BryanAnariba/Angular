import 'colors';
import cors from 'cors';
import express, { Application, json, urlencoded } from "express";
import indexRoutes from './routes/index';

interface StartServerOptions {
  port: string | number;
}

export class Server {

  private readonly app!: Application;
  private readonly port!: number | string;

  constructor ( {port}: StartServerOptions ) {
    this.app = express();
    this.port = port;
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings (): void {
    this.app.set('PORT', this.port);
  }

  middlewares (): void {
    this.app.use(cors({origin: ['http://localhost:4200']}));
    this.app.use(json());
    this.app.use(urlencoded({extended: true}));
  }

  routes (): void {
    this.app.use('/api', indexRoutes);
  }
  
  staticFiles (): void {
  }

  async start(): Promise<void> {
    try {
      await this.app.listen(this.app.get('PORT'))
      console.log(`====================================`.red);
      console.log(`Node JS Server started on port: ${ this.app.get('PORT') }`.cyan);
      console.log(`====================================`.red);
    } catch (error) {
      throw new Error( `Error: ${ (error instanceof Error) ? error.message : error  }` );
    }
  }
  
}