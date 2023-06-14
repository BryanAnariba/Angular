import { Router } from 'express';

const router: Router = Router();

router.get( '', ( req, res ) => {
    return res.status(200).json({ statusCode: 200, data: 'Artists Works' })
});

export { router };