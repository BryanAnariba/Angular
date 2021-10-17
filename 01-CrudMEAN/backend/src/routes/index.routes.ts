import { Router, Request, Response } from 'express';

class IndexRoutes {
    public router: Router = Router();

    constructor () {
        this.config();
    }

    config = (): void => {
        this.router.get('/', ( req: Request, res: Response ) => {
            return res.send( 'Hello' );
        });
    }
}

const IRoutes = new IndexRoutes();

export default IRoutes.router;