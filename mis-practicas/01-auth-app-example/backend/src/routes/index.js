
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import { Router } from 'express';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const router = Router();

//console.log(__dirname);

const getRoute = ( fileName ) => {
    return fileName.split( '.' ).shift();
}

console.clear();
readdirSync( __dirname ).filter( fileName => {
    const routeName = getRoute(fileName);
    if ( routeName !== 'index') {
        console.log({ routeName });
        import( `./${routeName}.js` )
        .then(
            (moduleRouter) => {
                router.use( `/${ routeName }`, moduleRouter.router );
            }
        );
    }
});

export default router;