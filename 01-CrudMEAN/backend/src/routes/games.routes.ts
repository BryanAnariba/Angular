import { Router, Request, Response } from 'express';

class GamesRoutes {
    public router : Router = Router();

    constructor () {
        this.config();
    }

    config () {
        this.router.get('/', ( req: Request, res: Response ) => {
            return res.json('Games');
        });
    }
}

const GameRoutes = new GamesRoutes()

export default GameRoutes.router;


